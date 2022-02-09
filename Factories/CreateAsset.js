import AnimationEntity from '../vue/Mixins/AnimationEntity';
import Layer from "../vue/Components/SVG/Layer";
import Vector from "../vue/Components/SVG/Vector";
import Scene from "../vue/Components/SVG/Scene";
import LayerExtractor from "../Helpers/LayerExtractor";
import SrcToKey from "../vue/Components/Filters/SanitizedPath";

/**
 *
 * @param src
 * @param useOrComponent
 * @param component
 * @returns {{src: *, use: *}|{components: {Entity: *}, data(): *, render: (function(*): *), props: {camera: {default: null, type: *}}}}
 */
let createAsset = function (data = {}) {
    let src = null;
    let layer = null;

    // eslint-disable-next-line
    if (data.hasOwnProperty("src")) {
        src = data.src;
    }

    // eslint-disable-next-line
    if (data.hasOwnProperty("layer")) {
        layer = data.layer;
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
             * We will only display the layer specified here, or all layers if null
             */
            layer: {
                type: String,
                default: null,
            },

            lookAt: {
                type: String,
                default: null,
            }
        },

        data() {
            return { layers: null};
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
                return this.layers;
            },

            srcKey() {
                if(this.src) {
                    return SrcToKey(this.src);
                }

                return null;
            },
        },

        methods: {

            /**
             * Image resource has finished loading so we should process into usable layers
             * @param loadedAsset the loaded image object
             */
            onLoaded(loadedAsset) {
                console.log("onloaded", loadedAsset);
                this.layers = LayerExtractor(loadedAsset, this.layer);
            },
        },

        components: {Vector, Layer, Scene},

        render() {
            let props = {
                position: this.defaultPosition,
                color: this.defaultColor,
            };

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
        let c = {
            type: String,
            default: data.color,
        };

        mixin.props['color'] = c;
        delete data.color;
    }

    // // If we have custom color then we want to add it as a prop
    // // eslint-disable-next-line
    // if (data.hasOwnProperty("viewport")) {
    //     console.log("found a viewport prop", data.viewport);
    //     let c = {
    //         type: Boolean,
    //         default: data.viewport,
    //     };
    //
    //     console.log(c);
    //     mixin.props['show-viewbox'] = c;
    //     delete data.viewport;
    // }

    // If we have a use value replace the prop in the asset to return the name of the layer by default
    if (src) {
        delete mixin.props.src;
        mixin.props.src = {
            type: String,
            default: src,
        };
    }

    // If we have a use value we only want to display these layers on the screen. use can be an array or a string
    if (layer) {
        console.log("has layer prop", layer);
        delete mixin.props.layer;

        mixin.props.layer = {
            type: String,
            default: layer,
        };

        delete data.layer;
    }

    /* eslint-disable-next-line */
    if (data.hasOwnProperty("lookAt")) {
        console.log("found a lookat", data.lookAt);
        let c = {
            type: String,
            default: data.lookAt,
        };

        mixin.props['lookAt'] = c;
        delete data.lookAt;
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
