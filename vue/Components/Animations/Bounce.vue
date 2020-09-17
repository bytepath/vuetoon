<script>
    import AnimationEntity from '../../Mixins/AnimationEntity';
    export default {
        mixins: [ AnimationEntity ],

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
                                context.position.x = Math.sin(context.keyframe/1000) * (context.mx * 100);
                            }
                        }
                    ],
                };
            },
        },

        render() {
            return this.$scopedSlots.default({
                matrix: this.transform,
            })
        }
    }
</script>
