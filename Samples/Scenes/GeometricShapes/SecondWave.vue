<script>
    import AnimationEntity from "../Bytepath/Mixins/AnimationEntity";

    export default {
        mixins: [AnimationEntity],
        data() {
            return {};
        },

        methods: {
            componentAnimations(){
                return {
                    default: {
                        duration: 2000,
                        end: 1000,
                        frames: {
                            0: {
                                name: "fixed position at the first",
                                action: [
                                    this.scrollFixed(0, 0),
                                    this.rotateFixed(0)
                                ],
                            },
                            360: {
                                name: 'scroll to the right',
                                action: [
                                    this.scrollLinear(1, 1),
                                ],
                            },
                        }
                    },
                };
            },
        }
    }
</script>

<template>
        <g :id="name" :data-name="name" :data-scroll="prevScroll"  transform="">
            <slot :matrix="transform"></slot>
        </g>
</template>
