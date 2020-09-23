<script>
    import AnimationEntity from "./AnimationEntity";

    export default {
        mixins: [AnimationEntity],

        props: {
            /**
             * The internal id inside the SVG that we want to use. Leave blank to use the whole asset
             */
            use: {
                type: String,
                default: null
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
            return { asset: null, layers: null };
        },

        methods: {
            onLoaded(loadedAsset) {
                this.asset = loadedAsset;
                let layers = {};
                Object.keys(this.asset.layers).map((layer) => {
                    layers[layer] = new LayeredPosition({}, {
                        name: layer,
                        id: this.asset.id + layer,
                        ...this.asset.layers[layer]
                    });
                });

                this.layers = layers;
            },
        },

        /**
         * Equivalent to
         * <template>
         *      <entity v-bind="$props" :src="src" :use="use">
         *          <layer v-for="(layer, i) in layers" :key="i" :position="layer" />
         *      </entity>
         * </template>
         */
        render: function (createElement) {
            let props = {...this.$props};
            let on = {loaded: this.onLoaded};
            (this.use) ? props["use"] = this.use : null;
            return createElement('entity', {props, on}, [])
        },
    };
</script>

