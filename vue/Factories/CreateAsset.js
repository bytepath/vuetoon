import Entity from "../Components/Entity";
import AnimationEntity from '../Mixins/AnimationEntity';
import nameFromPath from "../Components/Filters/Filename";
import LayeredPosition from "../../Helpers/LayeredPosition";
import Layer from "../Components/SVG/Layer";

/**
 *
 * @param src
 * @param useOrComponent
 * @param component
 * @returns {{src: *, use: *}|{components: {Entity: *}, data(): *, render: (function(*): *), props: {camera: {default: null, type: *}}}}
 */
let createAsset = function (data = {}) {
    let src = null;
    let use = null;
    let asset = null;

    if (data.hasOwnProperty("src")) {
        src = data.src;
    }

    if (data.hasOwnProperty("layer")) {
        use = data.layer;
    }

    let mixin = {
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
            return {asset, layers: null};
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

        components: {Entity, Layer},

        /**
         * Equivalent to
         * <template>
         *      <entity v-bind="$props" :src="src" :use="use" />
         * </template>
         */
        render: function (createElement) {
            let props = {...this.$props};
            let on = {loaded: this.onLoaded};
            (this.use) ? props["use"] = this.use : null;
            return createElement('entity', {props, on})
        },
    };

    // If we have a use value replace the prop in the asset to return the name of the layer by default
    if (src) {
        delete mixin.props.src;
        mixin.props.src = {
            type: String,
            default: src,
        };
    }

    // If we have a use value replace the prop in the asset to return the name of the layer by default
    if (use) {
        delete mixin.props.use;
        mixin.props.use = {
            type: String,
            default: use,
        };
    }

    let retval = {...data};
    delete retval.src;
    delete retval.layer;

    if (retval.hasOwnProperty("mixins")) {
        retval.mixins.push(mixin);
    } else {
        retval.mixins = [mixin];
    }

    return retval;
}

export default createAsset;
