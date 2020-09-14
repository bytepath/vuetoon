<script>
    import AnimationEntity from "../Mixins/AnimationEntity";

    export default {
        mixins: [AnimationEntity],

        props:{
            ma: {
                type: Number,
                default: 0.1
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
        <slot />
    </g>
</template>
