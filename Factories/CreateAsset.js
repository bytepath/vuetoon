import Vector from "../vue/Components/SVG/Vector";
import AnimationEntity from '../vue/Mixins/AnimationEntity';
import LayeredPosition from "../Helpers/LayeredPosition";
import Layer from "../vue/Components/SVG/Layer";

/**
 *
 * @param src
 * @param useOrComponent
 * @param component
 * @returns {{src: *, use: *}|{components: {Entity: *}, data(): *, render: (function(*): *), props: {camera: {default: null, type: *}}}}
 */
let createAsset = function (data = {}) {
    let src = null;
    let layers = null;
    let image = null;

    // eslint-disable-next-line
    if (data.hasOwnProperty("src")) {
        src = data.src;
    }

    // eslint-disable-next-line
    if (data.hasOwnProperty("layers")) {
        layers = data.layers;
    }

    let mixin = {
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
             * We will only display the layers that are specified here, or all layers if array is empty
             */
            showLayers: {
                type: Array,
                default() {
                    return [];
                },
            }
        },

        data() {
            return {image, layers: null};
        },

        mounted() {
            if (this.$children[0]) {
                this.$children[0].$on('loaded', this.onLoaded);
            }
        },

        destroyed() {
            this.$children[0].$off();
        },

        computed: {
            filteredLayers() {
                if (!this.layers) {
                    return {};
                }

                if (this.showLayers.length === 0) {
                    return this.layers;
                }

                return Object.keys(this.layers)
                    .filter(layer => this.showLayers.includes(layer))
                    .reduce((obj, layer) => {
                        obj[layer] = this.layers[layer];
                        return obj;
                    }, {});
            }
        },

        methods: {

            /**
             * Image resource has finished loading so we should process into usable layers
             * @param loadedAsset the loaded image object
             */
            onLoaded(loadedAsset) {
                this.image = loadedAsset;
                let layers = {};
                Object.keys(this.image.layers).map((layer) => {
                    layers[layer] = new LayeredPosition({}, {
                        name: layer,
                        id: this.image.id + layer,
                        ...this.image.layers[layer]
                    });
                });

                this.layers = layers;
            },
        },

        components: {Vector, Layer},

        // /**
        //  * Equivalent to
        //  * <template>
        //  *      <entity v-bind="$props" :src="src">
        //  *          <layer v-for="(layer, i) in filteredLayers" :key="i" :position="layer" />
        //  *      </entity>
        //  * </template>
        //  */
        // render: function (createElement) {
        //     let props = {...this.$props};
        //     let children = [];
        //
        //     Object.keys(this.filteredLayers).map((layer, i) => {
        //         let element = createElement('layer', {
        //             props: {
        //                 position: this.layers[layer],
        //                 key: i,
        //             }
        //         });
        //         children.push(element);
        //     });
        //
        //     console.log("renderless func lol");
        //
        //     return createElement('vector', {props}, children);
        // },

        render() {
            let props = {
                position: this.defaultPosition,
                color: this.defaultColor,
                matrix: this.getViewportMatrix(),
            };

            console.log("bradley renderless lol", this.getViewportMatrix());
            return this.$scopedSlots.default(props);
        }

    };


    // If we have custom animations then we add them here
    // eslint-disable-next-line
    if (data.hasOwnProperty("animations")) {
        mixin.computed['animations'] = data.animations;
    }

    // If we have custom color then we want to add it as a prop
    // eslint-disable-next-line
    if (data.hasOwnProperty("color")) {
        console.log("found a color prop", data.color);
        let c = {
            type: String,
            default: data.color,
        };

        console.log(c);
        mixin.props['color'] = c;
        delete data.color;
    }

    // If we have custom color then we want to add it as a prop
    // eslint-disable-next-line
    if (data.hasOwnProperty("viewport")) {
        console.log("found a viewport prop", data.viewport);
        let c = {
            type: Boolean,
            default: data.viewport,
        };

        console.log(c);
        mixin.props['show-viewbox'] = c;
        delete data.viewport;
    }

    // If we have a use value replace the prop in the asset to return the name of the layer by default
    if (src) {
        delete mixin.props.src;
        mixin.props.src = {
            type: String,
            default: src,
        };
    }

    // If we have a use value we only want to display these layers on the screen. use can be an array or a string
    if (layers) {
        delete mixin.props.showLayers;

        mixin.props.showLayers = {
            type: Array,
            default() {
                return layers;
            },
        };
    }

    let retval = {...data};
    delete retval.src;
    delete retval.layers;

    // eslint-disable-next-line
    if (retval.hasOwnProperty("mixins")) {
        retval.mixins.push(mixin);
    } else {
        retval.mixins = [mixin];
    }

    return retval;
}

export default createAsset;
