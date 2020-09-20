import AnimationEntity from "../Mixins/AnimationEntity";
import Entity from "../Components/Entity";

export default {
    name: 'Asset',
    mixins: [AnimationEntity],
    components: {Entity},

    /**
     * Equivalent to
     * <template>
     *      <entity v-bind="$props" :src="src" :use="use" />
     * </template>
     */
    render: function (createElement) {
        let props = {...this.$props, src: this.src};
        (this.use) ? props["use"] = this.use : null;
        return createElement('entity', {props})
    },
};
