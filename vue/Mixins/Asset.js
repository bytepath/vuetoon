import AnimationEntity from "../Mixins/AnimationEntity";

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
    },

    computed: {
        catHam() {
            return "dog ham" + this._uid;
        },
    },

    /**
     * Equivalent to
     * <template>
     *      <entity v-bind="$props" :src="src" :use="use" />
     * </template>
     */
    render: function (createElement) {
        let props = {...this.$props, src: this.src};
        console.log("render use is", this.use, this.$props);
        (this.use) ? props["use"] = this.use : null;
        return createElement('entity', {props})
    },

    extractLayers() {

    }
};
