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
            if (!Object.prototype.hasOwnProperty.call(loadedAssets, this.src)) {
                return this.loadAsset();
            }

            // Asset was previously loaded by someone else
            this.loadedAssetId = loadedAssets[this.src];
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
                 * The DOM id we will pass to the <use> tag
                 */
                loadedAssetId: null,

                /**
                 * A string version of the SVG file grabbed via ajax
                 */
                assetData: null,
            };
        },

        computed: {
            /**
             * Returns true if we have loaded the asset
             */
            loaded() {
                return (this.loadedAssetId !== null);
            },
        },

        methods: {
            /**
             * Makes an ajax request to load the :src file
             */
            loadAsset() {
                axios.get(this.src)
                .then((response) => {
                    // Set this :src file as downloaded in the global list
                    loadedAssets[this.src] = this.asset;

                    this.loadedAssetId = this.asset;
                    this.assetData = this.ensureUniqueIds(response.data);

                    this.$emit("loaded");
                })
                .catch((error) => console.log('asset err', error));
            },

            /**
             * Ensures unique IDs in the imported SVG by appending :asset to EVERY id inside the svg
             * @param {String} html The representing a single element
             * @return {Element}
             */
            ensureUniqueIds(svg) {
                var template = document.createElement('template');
                template.innerHTML = svg;
                let camera = template.content.firstElementChild.viewBox;
                console.log("camera is", camera);
                template.content.firstElementChild.removeAttribute('viewBox');
                template.content.firstElementChild.querySelectorAll("[id]").forEach((element) => {
                    element.setAttribute("id", this.asset+element.id);
                });

                return template.content.firstElementChild.outerHTML;
            },
        }
    }
</script>

<template>
    <g>
        <defs>
            <symbol :id="asset" v-if="assetData" v-html="assetData"></symbol>
            <use v-else :id="asset" :href="'#' + loadedAssetId"></use>
        </defs>
        <slot :loaded="loaded"/>
    </g>
</template>

