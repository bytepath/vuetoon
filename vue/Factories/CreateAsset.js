
import Entity from "../Components/Entity";
import AnimationEntity from '../Mixins/AnimationEntity';
import nameFromPath from "../Components/Filters/Filename";

/**
 *
 * @param src
 * @param useOrComponent
 * @param component
 * @returns {{src: *, use: *}|{components: {Entity: *}, data(): *, render: (function(*): *), props: {camera: {default: null, type: *}}}}
 */
let createAsset = function(data = {}) {
    let src = null;
    let use = null;
    let asset = null;

    if(data.hasOwnProperty("src"))
    {
        src = data.src;
    }

    if(data.hasOwnProperty("layer")){
        use = data.layer;
    }

    let mixin = {
        mixins: [AnimationEntity],

        props:{
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

        data() { return { asset }; },

        computed:{
            layers() {
                if(this.asset) {
                    return this.asset.layers;
                }

                return null;
            },
        },

        methods:{
            onLoaded(loadedAsset){
                this.asset=loadedAsset;
                console.log('layers is', {...this.layers});

                //this.$options.components = { ...this.$options.components, ...this.layers };
                Object.keys(this.layers).map((key) => {
                    this.$options.components[key] = this.layers[key];
                });
                //console.log('loaded event handler', { ...this.$options.components });
            },
        },

        components: { Entity },

        /**
         * Equivalent to
         * <template>
         *      <entity v-bind="$props" :src="src" :use="use" />
         * </template>
         */
        render: function (createElement) {
            let props = { ...this.$props };
            (this.use) ? props["use"] = this.use : null;
            return createElement('entity', { props })
        },
    };

    // If we have a use value replace the prop in the asset to return the name of the layer by default
    if(src){
        delete mixin.props.src;
        mixin.props.src = {
            type: String,
            default: src,
        };
    }

    // If we have a use value replace the prop in the asset to return the name of the layer by default
    if(use){
        delete mixin.props.use;
        mixin.props.use = {
            type: String,
            default: use,
        };
    }

    let retval = { ...data };
    delete retval.src;
    delete retval.layer;

    if(retval.hasOwnProperty("mixins")){
        retval.mixins.push(mixin);
    }
    else {
        retval.mixins = [mixin];
    }

    return retval;
}

export default createAsset;
