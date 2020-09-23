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
    console.log("create asset", data);
    let src = null;
    let layers = null;
    let image = null;

    if (data.hasOwnProperty("src")) {
        src = data.src;
    }

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
                default(){ return []; },
            }
        },

        data() {
            return {image, layers: null};
        },

        computed:{
          filteredLayers(){
              console.log("filtering layers", this.showLayers);
              if(!this.layers){
                  return {};
              }

              if(this.showLayers.length === 0){
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

        components: { Entity, Layer },

        /**
         * Equivalent to
         * <template>
         *      <entity v-bind="$props" :src="src">
         *          <layer v-for="(layer, i) in filteredLayers" :key="i" :position="layer" />
         *      </entity>
         * </template>
         */
        render: function (createElement) {
            let props = {...this.$props};
            let on = {loaded: this.onLoaded};
            let children = [];

            Object.keys(this.filteredLayers).map((layer, i) => {
                console.log("renderless layer loop", layer, this.layers);
                let element = createElement('layer', {
                    props: {
                        position: this.layers[layer],
                        key: i,
                    }
                });
                children.push(element);
            });

            return createElement('entity', {props, on}, children);
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

    // If we have a use value we only want to display these layers on the screen. use can be an array or a string
    if (layers) {
        delete mixin.props.showLayers;

        mixin.props.showLayers = {
            type: Array,
            default(){ return layers; },
        };
    }

    let retval = {...data};
    delete retval.src;
    delete retval.layers;

    if (retval.hasOwnProperty("mixins")) {
        retval.mixins.push(mixin);
    } else {
        retval.mixins = [mixin];
    }

    return retval;
}

export default createAsset;
