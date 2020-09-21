<template>
    <svg :id="'svg' + usedAsset" :width="w" :height="h" :transform="transform" :viewBox="viewboxString"
         :preserveAspectRatio="preserveAspectRatio">
        <asset-loader v-if="src" :src="src" :asset="asset" @loaded="assetLoaded" v-slot="{ href }">
            <g :id="'g' + usedAsset" :transform="assetMatrix">
                <use v-if="href" :href="'#' + usedAsset"/>
            </g>
        </asset-loader>
        <template v-if="debug">
            <rect v-if="debug" :x="centerPosition.x - 5" :y="centerPosition.y - 5" width="10" height="10" fill="blue"/>
        </template>
    </svg>
</template>

<script>
    import AssetLoader from "./Loaders/AssetLoader";
    import AnimationEntity from "../Mixins/AnimationEntity";
    import CreateAsset from "../Factories/CreateAsset";

    export default {
        name: 'entity',
        mixins: [AnimationEntity],
        props: {
            /**
             * The file path to the asset we need to load. Optional if you don't need to load an asset
             */
            src: {
                type: String,
                default: null,
            },

            /**
             * The internal id inside the SVG that we want to use. Leave blank to use the whole asset
             */
            use: {
                type: String,
                default: null
            },
        },
        data() {
            return {
                /**
                 * The transformation matrix for the loaded asset
                 * @var DOMMatrix
                 */
                em: new DOMMatrix(),

                /**
                 * A rectangle representing the area of the user coordinate system we want to display
                 */
                camera: null,
            };
        },

        computed: {
            preserveAspectRatio(){
                // if(this.use){
                //     return "xMinYMin meet"
                // }

                return "none";
                //return "xMinYMin slice"
            },

            viewBox(){
                if(this.camera){
                    return {
                        x: this.camera.x,
                        y: this.camera.y,
                        width: this.camera.width - this.camera.x,
                        height: this.camera.height - this.camera.y,
                    };
                }
                return null;
            },

            viewboxString() {
                if (this.viewBox) {
                    let b = this.viewBox;
                    return `${b.x} ${b.y} ${b.width} ${b.height}`;
                }

                return null;
            },

            /**
             * The transformation matrix for the loaded asset returned as a string
             * @returns String
             */
            assetMatrix() {
                return this.em.toString();
            },

            /**
             * The ID that should be used on the loaded svg file, should we be the component responsible for doing that
             * @returns String
             */
            asset() {
                let asset = (this.name) ? `__${this._uid}-${this.name}` : `__${this._uid}`;
                return asset;
            },

            /**
             * The ID of the DOM asset we are using to draw this entity.
             * @returns String
             */
            usedAsset() {
                return (this.use) ? (this.asset + this.use) : this.asset;
            }
        },
        methods: {
            /**
             * Called when asset has been loaded by the asset loader component. Moves whatever we are trying to look at
             * to point {0, 0} so that we are "looking" at it
             */
            assetLoaded(asset) {
                if (asset.viewBox) {
                    this.camera = { ...asset.viewBox };
                }
                setTimeout(this.lookAtAsset, 0);
            },

            /**
             * Moves the "camera" to look directly at the asset we are puling from a larger scene
             */
            lookAtAsset() {
                console.log("looking at", 'g' + this.usedAsset);
                let element = document.getElementById('g' + this.usedAsset);
                if (element) {
                    if (typeof element.getBBox == "function") {
                        let bbox = element.getBBox();

                        // Move the asset into the position of the camera by multiplying by the inverse of its bbox
                        // X y positions
                        this.position.height = bbox.height;
                        this.position.width = bbox.width;

                        console.log("bbox", bbox);
                        // Set camera position to the BBox of this element
                        this.camera.x = bbox.x;
                        this.camera.y = bbox.y;
                        this.camera.width = bbox.width + bbox.x;
                        this.camera.height = bbox.height + bbox.y;
                        //this.em = new DOMMatrix([1, 0, 0, 1, -bbox.x, -bbox.y]);

                    }
                }
            },
        },
        components: {AssetLoader},

        /**
         * The following methods are used to instantiate an entity using an external asset
         * and are automatically removed by vue when creating a component
         */
        src: null,
        fromAsset(src) {
            return CreateAsset(src);
        },
    }
</script>

