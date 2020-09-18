<script>
    /**
     * Entity loader accepts src that is the path to the svg file containing the assets this entity wants.
     *
     * src is checked against a global list of downloaded svg files
     * if src not already downloaded when requested, the entity that needed it first downloads it and shares it in its def tag
     * the entity shares the src pathname and id of the def of the downloaded model so that the next time an asset needs
     * something from "src" path, it can just immediately grab it because its already in the dom
     */

    const axios = require('axios');
    let loadedAssets = {};
    export default {
        mixins: [],
        props: {
            // The path to the image we want to load
            src: {
                type: String,
                required: true,
            },

            // The name of the asset i.e the id of the image
            asset: {
                type: String,
                required: true,
            }
        },

        created() {
            /*
            // If the static loadedAssets variable has a key that is equal to the path/src we are trying to
            // load, someone else has already loaded it. loadAssets also holds the dom ID of the already
            // loaded version of this asset we can use in conjunction with the SVG <use> tag to make
            // a copy
            */
            if (!Object.prototype.hasOwnProperty.call(loadedAssets, this.src)) {
                this.loadAsset();
            } else {
                console.log("Entity previously loaded", loadedAssets);
                this.loadedAssetId = loadedAssets[this.src];
            }
        },
        destroyed() {
            delete loadedAssets[this.src];
        },
        data() {
            return {
                // The DOM id of the asset that was already loaded by someone else
                loadedAssetId: null,

                // A stringified version of the SVG file grabbed via ajax
                assetData: null,
            };
        },

        computed: {
            loaded() {
                return (this.loadedAssetId !== null);
            },
        },

        methods: {
            loadAsset() {
                axios.get(this.src)
                    .then((response) => {
                        this.assetData = this.ensureUniqueIds(response.data);
                        loadedAssets[this.src] = this.asset;
                        this.loadedAssetId = this.asset;
                        console.log("entity created");
                        this.$emit("loaded");
                    })
                    .catch((error) => console.log('asset err', error));
            },

            /**
             * Ensures that the ID of the imported SVG are unique by appending the asset id to EVERY id inside it
             * @param {String} HTML representing a single element
             * @return {Element}
             */
            ensureUniqueIds(html) {
                var template = document.createElement('template');
                template.innerHTML = html;
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

