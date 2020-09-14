<script>
    import AnimationEntity from "../Mixins/AnimationEntity";

    export default {
        mixins: [AnimationEntity],

        props:{
            ma: {
                type: Number,
                default: 0.1
            },
            a1: {
                type: Number,
                default: 0
            },
            a2: {
                type: Number,
                default: 180
            },
        },

        components: {
        },

        created(){
            this._verbose = true;
            console.log("playing spin", this);
            this.animation.play();
        },

        mounted(){
            if(this.$el) {
                console.log(this.$el.getBoundingClientRect());
            }
        },

        methods:{
            spinBounce(){

            },

            rotateCounterClockwise(direction = 1, max= 360, min = 0 ){
                return (currentScroll) => {
                    //console.log("Rotate linear function");
                    let tempAngle = 360 - ((currentScroll * direction) % 360);
                    // if (tempAngle > max) {
                    //     tempAngle = max;
                    // }
                    // else if (tempAngle < min) {
                    //     tempAngle = min;
                    // }

                    this.angle = tempAngle;
                }
            },


            componentAnimations() {
                return {
                    default: {
                        duration: 36000,
                        frames: {
                            0: {
                                action: [
                                    this.rotateCounterClockwise(this.ma)
                                ]
                            },
                        },
                    },
                };
            },
        },
    }
</script>

<template>
    <g :transform="transform">
        <slot :tranform-data="computedTransform" />
    </g>
</template>
