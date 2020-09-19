import AnimationEntity from '../Mixins/AnimationEntity';
import Entity from "../Components/Entity";

export default function(src, use = null) {
    return {
        name: (use) ? use : "entity",
        data() {
            return {src, use};
        },
        mixins: [AnimationEntity],
        components: {Entity},
        render: function (createElement) {
            let props = { ...this.$props, src: this.src };
            console.log("entity render", name, props, this);
            (this.use) ? props["use"] = this.use : null;
            return createElement('entity', { props })
        }
    }
}

//<template>
//  <entity v-bind="$props" :src="src" :use="use" />
//</template>
