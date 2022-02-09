<template>
        <svg id="cathog" :viewBox="viewport" :height="height" :width="width" :overflow="overflow" >
            <asset-loader :src="src" :owner="'__' + _uid" @loaded="getViewbox" />
            <slot />
        </svg>
</template>

<script>
    /* eslint-disable */
    import AssetLoader from "../Loaders/AssetLoader";

    export default {
        mixins: [],

        props:{
            /**
             * What to do if this entity goes outside it's clip boundaries. Default is hidden
             */
            overflow: {
                type: String,
                default: "hidden"
            },

            height: {
                default: null,
            },

            width:{
                default: null,
            },

            /**
             * The file path to the asset we need to load. Optional if you don't need to load an asset
             */
            src: {
                type: String,
                default: null,
            },
        },

        data() {
            return {
                box: null,
            };
        },

        computed: {
            viewport() {
                if(this.box) {
                    let v = this.box;
                    return `${v.x} ${v.y} ${v.width} ${v.height}`;
                }

                return null;
            }
        },

        methods: {
            getViewbox(data) {
                this.box = data.viewBox;
            },
        },

        components: { AssetLoader }
    }
</script>

