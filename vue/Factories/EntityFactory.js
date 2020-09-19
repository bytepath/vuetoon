import AnimationEntity from '../Mixins/AnimationEntity';
import Entity from "../Components/Entity";

/**
 * Factory function to create a new entity
 * @param src the file path to the SVG image
 * @param use the name of the layer/group that we want to create the entity with
 * @returns {{mixins: [*], components: {Entity: *}, data(): *, name: (*|string), render: (function(*): *)}|{src: *, use: *}}
 */
let createEntity = function(src, use = null) {
    let name = (use) ? use : "entity";

    let component = {
        name,
        data() {
            return {src, use};
        },
        mixins: [ AnimationEntity ],
        components: { Entity },

        /**
         * Equivalent to
         * <template>
         *      <entity v-bind="$props" :src="src" :use="use" />
         * </template>
         */
        render: function (createElement) {
            let props = { ...this.$props, src: this.src };
            (this.use) ? props["use"] = this.use : null;
            return createElement('entity', { props })
        }
    };

    let retval = {};
    retval[name] = component;
    return retval;
}

/**
 * Returns an entity if use is specified and returns a function to MAKE entities if it's not
 * @param src the file path to the SVG image
 * @param use the name of the layer/group that we want to create the entity with
 */
let createFactory = function(src, use = null) {
    let factory = (use) => createEntity(src, use);
    return (use) ? factory(use) : factory;
}

export default createFactory;
