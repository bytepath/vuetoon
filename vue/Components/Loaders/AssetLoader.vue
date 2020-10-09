<template>
    <g>
        <defs>
            <symbol :id="owner" v-if="assetData" v-html="assetString"></symbol>
        </defs>
        <slot :loaded="loaded" :asset="loadedAsset" :href="'#' + loadedAssetId" />
    </g>
</template>

<script>
    /**
     * Entity loader accepts src that is the path to the svg file containing the assets this entity wants.
     *
     * src is checked against a global list of downloaded svg files
     * if src not already downloaded, the entity that first requests it will download it
     * Any assets that ask for this file afterwards will use the version downloaded by the other component
     * There is a global variable called loadedAssets that holds the list of loaded assets
     * loadedAssets has the syntax { src: "id-that-loaded-this-file" } where src is a filename/url
     */
    import SanitizedPath from "../Filters/SanitizedPath";
    /* eslint-disable-next-line */
    let loadedAssets = {};
    import Loader from "../../../Helpers/SVGLoader";

    export default {
        props: {
            /**
             * The file path to the asset we need to load.
             */
            src: {
                type: String,
                default: null,
            },

            /**
             * The id of the asset that requested this asset
             */
            owner: {
                type: String,
                required: true,
            }
        },

        data() {
            return {
                loader: Loader,

                /**
                 * The loaded asset
                 */
                loadedAsset: null,

                /**
                 * The layers we found in the SVG
                 */
                rawLayers: [],

                /**
                 * Was this the component that loaded the file or was it someone else
                 */
                loadedTheFile: false,
            };
        },

        /**
         * Check loadedAssets variable to see if someone else has already loaded the requested file. If so, we can
         * use the <use> tag of the SVG spec to clone the tag with id = loadedAssets[this.src]
         */
        created() {
            this.loader.load(this.src, this.owner).then(() => {
                this.loadedAsset = this.loader.loadedAssets[this.assetKey];

                if(this.loader.loadedAssets[this.assetKey].id == this.owner){
                    this.loadedTheFile = true;
                }

                // Emit a loaded event so that parent classes can act on that
                this.$emit("loaded", this.loadedAsset);
                //this.$parent.$emit("loaded", this.loadedAsset);

            }).catch(() => {});
        },

        /**
         * If we remove this component we need to reload any assets it loaded
         */
        destroyed() {
            delete this.loader.deleteAsset[this.src];
        },

        computed: {
            /**
             * Returns true if we have loaded the asset
             */
            loaded() {
                return (this.loadedAssetId !== null);
            },

            /**
             * The ID of the dom element containing our asset. Not necessarily part of this component
             * someone else may have loaded the data and we just make a copy
             */
            loadedAssetId(){
              return (this.loadedAsset) ? this.loadedAsset.id : null;
            },

            /**
             * The data attribute of the loaded asset
             */
            assetData(){
                if(this.loadedAsset){
                    if(this.loadedTheFile) {
                        return this.loadedAsset.data;
                    }
                }

                return null;
            },

            /**
             * Returns the list of layers that are valid entities
             */
            layers() {
                return this.rawLayers.filter((layer) => (layer.charAt(0) !== "_"));
            },

            /**
             * The key we use to find this asset in the global repository
             */
            assetKey() {
                return SanitizedPath(this.src);
            },

            /**
             * Returns the asset stringified as valid HTML
             */
            assetString() {
                return (this.assetData) ? this.assetData.outerHTML : "";
            }
        },

        methods: {}
    }
</script>

