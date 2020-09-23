<script>
    import AnimationEnity from "../../Mixins/AnimationEntity";
    import Entity from "../Entity";

    export default {
        name: 'layer',
        props: {
            layer: {
                type: Object,
                required: true,
            }
        },
        mixins: [AnimationEnity],
        components: {Entity}
    };
</script>

<template>
    <g transform="transform">
        <use :href="'#' + layer.component.id"/>
    </g>
</template>
