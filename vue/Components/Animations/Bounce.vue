<script>
    import KeyframeAnimation from '../../Mixins/KeyframeAnimation';
    import CalculatesTransformation from '../../Mixins/CalculatesTransformation';

    export default {
        mixins: [ KeyframeAnimation, CalculatesTransformation ],

        props:{
            mx: {
                type: Number,
                default: 0.1
            },
            my: {
                type: Number,
                default: 0.1
            },
        },

        components: {
        },

        methods:{
            componentAnimations() {
                //console.log("loading bounce anim");
                return {
                    default: [
                        {
                            name: 'bounceyman',
                            start: 0,
                            handler(context, tween) {
                                context.position.x = Math.sin(context.keyframe/1000) * 500;
                            }
                        }
                    ],
                };
            },
        },
    }
</script>

<template>
    <g>
        <slot :matrix="transform" />
    </g>
</template>
