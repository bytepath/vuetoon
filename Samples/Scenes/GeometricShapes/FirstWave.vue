<script>
    import AnimationEntity from "../Bytepath/Mixins/AnimationEntity";

    export default {
        mixins: [AnimationEntity],
        data() {
            return {};
        },

        methods: {
            componentAnimations() {
                return {
                    default: {
                        duration: 2000,
                        end: 1000,
                        frames:{
                            0:{
                                name: "initial location",
                                action: [
                                    this.scrollFixed(0,0),
                                    this.rotateFixed(0)
                                ],
                            },
                            360: {
                                name: 'scroll to the right',
                                action: [
                                    this.scrollLinear(1,1),
                                    //this.rotateLinear(0.067 )
                                ],
                            },
                            1200: {}
                        }
                    }
                };
            },
        },
        // a global event system where there is a renderless component that listens on a global event bus for a
        // event, then checks its internal event watch list, and then fire off the event to its animation. it would
        // allow for animations to trigger other animations
    }

</script>

<template>
        <g :id="name" :data-name="name" :data-scroll="prevScroll"  transform="">
            <slot :matrix="transform"></slot>
        </g>
</template>
