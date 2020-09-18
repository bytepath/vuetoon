<script>
    import AssetLoader from "./Loaders/AssetLoader";
    import AnimationEntity from "../Mixins/AnimationEntity";

    export default {
        mixins: [ AnimationEntity ],
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
             * The width of this asset. Optional if you want to use the size of the loaded asset
             */
            width: {
                type: String,
                default: null
            },

            /**
             * The height of this asset. Optional if you want to use the size of the loaded asset
             */
            height: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                /**
                 * The transformation matrix for the loaded asset
                 * @var DOMMatrix
                 */
                em: new DOMMatrix(),
            };
        },

        watch:{

        },

        computed: {
            /**
             * The transformation matrix for the loaded asset returned as a string
             * @returns String
             */
            assetMatrix(){
                return this.em.toString();
            },

            /**
             * The ID that should be used on the loaded svg file, should we be the component responsible for doing that
             * @returns String
             */
            asset() {
                return (this.name)? (this._uid + `-${this.name}`) : this._uid;
            },

            /**
             * The ID of the DOM asset we are using to draw this entity.
             * @returns String
             */
            usedAsset(){
                return (this.use)? (this.asset + this.use) : this.asset;
            }
        },
        methods: {
            /**
             * Called when asset has been loaded by the asset loader component. Moves whatever we are trying to look at
             * to point {0, 0} so that we are "looking" at it
             */
            assetLoaded() {
                setTimeout(this.lookAtAsset, 0);
            },

            /**
             * Moves the "camera" to look directly at the asset we are puling from a larger scene
             */
            lookAtAsset(){
                let element = document.getElementById(this._uid + '-g-' + this.usedAsset);
                if(element){
                    if(typeof element.getBBox == "function") {
                        let bbox = element.getBBox();
                        console.log("bbox", bbox);
                        this.em = new DOMMatrix([1,0,0,1,-bbox.x,-bbox.y]);
                    }
                }
            },
        },
        components: {AssetLoader}
    }
</script>

<template>
    <svg :width="width" :height="height" :transform="transform">
        <asset-loader v-if="src"  :src="src" :asset="asset" @loaded="assetLoaded" v-slot="{loaded}">
            <g :id="_uid + '-g-' + usedAsset" :transform="assetMatrix">
                <use v-if="loaded" :href="'#' + usedAsset" />
            </g>
        </asset-loader>
    </svg>
</template>

