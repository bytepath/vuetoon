<template>
    <g>
        <defs>
            <symbol :id="asset" v-if="assetData" v-html="assetString"></symbol>
        </defs>
        <slot :loaded="loaded" :href="'#' + loadedAssetId" />
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
    const axios = require('axios');
    let loadedAssets = {};
    import SanitizedPath from "../Filters/SanitizedPath";

    export default {
        props: {
            /**
             * The file path to the asset we need to load.
             */
            src: {
                type: String,
                required: true,
            },

            /**
             * The ID that should be used on the loaded svg file
             */
            asset: {
                type: String,
                required: true,
            }
        },

        /**
         * Check loadedAssets variable to see if someone else has already loaded the requested file. If so, we can
         * use the <use> tag of the SVG spec to clone the tag with id = loadedAssets[this.src]
         */
        created() {
            if (!Object.prototype.hasOwnProperty.call(loadedAssets, this.assetKey)) {
                return this.loadAsset();
            }

            // Asset was previously loaded by someone else so just hook into that instead of loading the same file again
            loadedAssets[this.assetKey].promise.then((response) => {
                this.loadedAsset = loadedAssets[this.assetKey];

                // Emit a loaded event so that parent classes can act on that
                this.$emit("loaded", this.loadedAsset);
            });
        },

        /**
         * If we remove this component we need to reload any assets it loaded
         */
        destroyed() {
            delete loadedAssets[this.src];
        },

        data() {
            return {
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

        methods: {
            /**
             * Makes an ajax request to load the :src file
             */
            loadAsset() {
                let promise = axios.get(this.src)
                .then((response) => {
                    // Set this :src file as downloaded in the global list
                    this.processLoadedImage(response.data);
                    this.loadedAsset = loadedAssets[this.assetKey];

                    // Emit a loaded event so that parent classes can act on that
                    this.$emit("loaded", this.loadedAsset);
                })
                .catch((error) => console.log('asset err', error));

                loadedAssets[this.assetKey] = { id: this.asset, promise, data: null, viewBox: null, layers: {}};
                this.loadedAsset = loadedAssets[this.assetKey];
                this.loadedTheFile = true;
            },

            /**
             * Ensures unique IDs in the imported SVG by appending :asset to EVERY id inside the svg
             * @param {String} html The representing a single element
             * @return {Element}
             */
            processLoadedImage(svg) {
                // Convert the string into dom elements
                var template = document.createElement('template');
                template.innerHTML = svg;

                // Remove the viewbox but make a copy of it in the global asset
                let viewBox = template.content.firstElementChild.getAttribute("viewBox");
                if(viewBox !== null){
                    const arr = viewBox.split(/[ ,]+/);
                    viewBox = {
                        x: arr[0],
                        y: arr[1],
                        width: arr[2],
                        height: arr[3]
                    };
                }
                loadedAssets[this.assetKey].viewBox = viewBox;
                template.content.firstElementChild.removeAttribute('viewBox');

                // Find all of the layers in this image
                template.content.firstElementChild.querySelectorAll("g[id]").forEach((element) => {
                    this.rawLayers.push(element.id);

                    // Ensure this ID is unique in the dom by adding the asset tag
                    element.setAttribute("id", this.asset+element.id);
                });

                // Save a copy of the layers we found in this image in the global var
                loadedAssets[this.assetKey].layers = this.rawLayers.filter((layer) => (layer.charAt(0) !== "_"));

                // Save the processed tags in the global variable;
                loadedAssets[this.assetKey].data = template.content.firstElementChild;
            },
        }
    }
</script>

