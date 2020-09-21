<template>
    <svg :id="'svg' + usedAsset" :width="w" :height="h" :transform="transform" :viewBox="viewboxString"
         :preserveAspectRatio="preserveAspectRatio">
        <asset-loader v-if="src" :src="src" :asset="asset" @loaded="assetLoaded" v-slot="{ href }">
            <g :id="'g' + usedAsset" :transform="assetMatrix">
                <use v-if="href" :href="href + ((use)?use:'')"/>
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
    import Position from "../../Helpers/Position";

    console.log("new position", new Position({x: 400}).getDefaultTransformMatrix());
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

            /**
             * position rect with {x,y,width,height}
             * If provided the camera will be moved to this location
             */
            camera: {
                type: Object,
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
                assetDimensions: null,
            };
        },

        computed: {
            preserveAspectRatio() {
                //return "xMinYMin slice";
                return "none";
            },

            /**
             * The viewbox is what svg uses to figure out what portion of the coordinate system to draw.
             * We multiply the values against the passed in camera prop to simulate moving the camera around
             * viewbox = [ 0 0 500 100 ]
             * top left    [0,0]    [500, 0]   //Top Right
             * Bottom Left [0,1000] [500,1000] //Bottom right
             */
            viewBox() {
                let viewbox = null;

                if (this.assetDimensions) {
                    let viewBox = new Position({
                        x: this.assetDimensions.x,
                        y: this.assetDimensions.y,
                        width: (this.assetDimensions.width - this.assetDimensions.x),
                        height: (this.assetDimensions.height - this.assetDimensions.y),
                    });

                    if (this.camera) {

                        //console.log("camera", this.camera);
                        viewBox.centerX = this.assetDimensions.width / this.camera.scaleX;
                        viewBox.centerY = this.assetDimensions.height / this.camera.scaleY;
                        viewBox.scaleX = 1 / this.camera.scaleX;
                        viewBox.scaleY = 1 / this.camera.scaleY;
                        viewBox.x = this.camera.x * (this.assetDimensions.width / (this.camera.scaleX << 2));
                        viewBox.y = this.camera.y * (this.assetDimensions.height / (this.camera.scaleY << 2));

                        let tl = viewBox.multiplyPoint(this.assetDimensions.x, this.assetDimensions.y);
                        let br = viewBox.multiplyPoint(this.assetDimensions.width, this.assetDimensions.height);

                        this.dimensions.width = br.x * (this.camera.scaleX);
                        this.dimensions.height = br.y * (this.camera.scaleY);

                        return new Position({
                            x: Math.abs(tl.x),
                            y: Math.abs(tl.y),
                            width: (br.x),
                            height: (br.y),
                        });
                    }
                }


                return viewbox;
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
                    this.assetDimensions = {...asset.viewBox};
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

                        // Set camera position to the BBox of this element
                        this.assetDimensions.x = bbox.x;
                        this.assetDimensions.y = bbox.y;
                        this.assetDimensions.width = bbox.width + bbox.x;
                        this.assetDimensions.height = bbox.height + bbox.y;
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

