<template>
    <vector height="auto" width="auto" v-bind="$props">
        <slot />
    </vector>
</template>

<script>
    /* eslint-disable */
    import Vector from "./Vector";
    import AcceptsViewportProps from "../../Mixins/AcceptsViewportProps";

    export default {
        mixins: [AcceptsViewportProps],

        props:{
            /**
             * What to do if this entity goes outside it's clip boundaries. Default we just continue drawing it
             */
            overflow: {
                type: String,
                default: "hidden"
            },

            /**
             * If false the viewbox attribute will not be added to the generated SVG tag
             */
            showViewbox: {
                type: Boolean,
                default: true,
            },

            height: {
                default: null,
            },

            width:{
                default: null,
            },
        },

        components: { Vector }
    }
</script>

