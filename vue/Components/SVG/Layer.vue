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

        methods:{
            /**
             * Called when the position variable or position props change
             */
            positionChanged() {
                console.log("position changed layer");
                this.animationDirty = true;
                requestAnimationFrame(this.computeTransformation);
            },
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
