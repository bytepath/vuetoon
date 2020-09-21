import AnimationEntity from "../Mixins/AnimationEntity";

export default {
    mixins: [AnimationEntity],

    computed:{
        catHam(){
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
        let props = {...this.$props, src: this.src };
        (this.use) ? props["use"] = this.use : null;
        return createElement('entity', {props})
    },

    extractLayers(){

    }
};
