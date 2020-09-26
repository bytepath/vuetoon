<script>
    import AnimationEnity from "../../Mixins/AnimationEntity";

    export default {
        name: 'layer',
        props: {
            position: {
                type: Object,
                required: true,
            }
        },

        mixins: [AnimationEnity],
    };
</script>

<template>
    <g :transform="transform">
        <use :href="'#' + position.component.id"></use>
    </g>
</template>
