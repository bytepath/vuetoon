/**
 * Factory function to create a new asset
 * @param src the file path to the SVG image
 * @param use the name of the layer/group that we want to create the entity with
 * @returns {{mixins: [*], components: {Entity: *}, data(): *, name: (*|string), render: (function(*): *)}|{src: *, use: *}}
 */
import Asset from "../Mixins/Asset"
import Entity from "../Components/Entity";

let createAsset = function(src, use = null) {
    console.log("create asset", src, use, this);

    let name = (use) ? use : "Asset";

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
        },
    };


    if(name !== "Asset"){
        let retval = {};
        retval[name] = component;
        return retval;
    }

    console.log("returning component");
    return component;
}

export default createAsset;
