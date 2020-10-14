<script>
    import AnimationEntity from "../../Mixins/AnimationEntity";
    import Vector from "./Vector";
    import CalculatesTransformation from "../../Mixins/CalculatesTransformation";
    import Position from "../../../Helpers/Position";

    export default {
        name: 'layer',
        mixins: [ AnimationEntity, CalculatesTransformation ],

        props: {
            layer: {
                type: Object,
                required: true,
            }
        },

        methods: {
            getCenterPosition() {
                // Defaults to 0,0
                let retval = {x: 0, y: 0};

                // Center X
                if (this.cx !== null) { // Use Prop first
                    retval.x = this.cx;
                } else if (this.position.centerX !== null) { // Then use position
                   retval.x = this.position.centerX;
                } else { // If no position use half the width
                    //retval.x = this.getCenterFromParentViewport().x;
                }

                // Center Y
                if (this.cy !== null) { // Use Prop first
                    retval.y = this.cy;
                } else if (this.position.centerY !== null) { // Then use position
                   retval.y = this.position.centerY;
                } else { // If no position use half the height
                   // retval.y = this.getCenterFromParentViewport().y;
                }

                //console.log("layer center", retval, this.layer);
                return new Position(retval);
            },

            getCenterFromParentViewport() {
                if(this.$el) {
                    let bbox = this.$el.getBBox();
                    console.log('layer box', bbox);
                }

                return { x: 0, y: 0 };
            },
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
