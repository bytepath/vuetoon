<script>
    import CalculatesTransformation from "../../Mixins/CalculatesTransformation";

    export default {
        name: 'layer',
        props: {
            position: {
                type: Object,
                required: true,
            }
        },

        mixins: [ CalculatesTransformation ],
    };
</script>

<template>
    <g :transform="transform">
        <use :href="'#' + position.component.id"></use>
    </g>
</template>
