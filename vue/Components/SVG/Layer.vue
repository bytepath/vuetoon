<script>
    import AnimationEnity from "../../Mixins/AnimationEntity";
    import Entity from "../Entity";
    import Position from "../../../Helpers/Position";

    export default {
        name: 'layer',
        props: {
            position: {
                type: Object,
                required: true,
            }
        },

        mixins: [AnimationEnity],
        components: { Entity }
    };
</script>

<template>
    <g  id="hhhhhhhh" :transform="transform">
        <use :href="'#' + position.component.id"/>
    </g>
</template>
