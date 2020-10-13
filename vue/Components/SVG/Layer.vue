<script>
    import CalculatesTransformation from "../../Mixins/CalculatesTransformation";
    import Vector from "./Vector";

    export default {
        name: 'layer',
        mixins: [ CalculatesTransformation ],

        props: {
            layer: {
                type: Object,
                required: true,
            }
        },

        components: { Vector },
    };
</script>

<template>
    <g :transform="transform">
        <use :href="'#' + layer.layer.id" ></use>
        <slot />
    </g>
</template>
