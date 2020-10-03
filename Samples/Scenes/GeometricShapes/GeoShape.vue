<script>
    import AnimationEntity from "../Bytepath/Mixins/AnimationEntity";
    import AcceleratesTranslation from "../Bytepath/Mutators/AcceleratesTranslation";
    import GPolygon from "../Bytepath/Primitives/GPolygon";

    export default {
        mixins: [
            AnimationEntity,
            AcceleratesTranslation,
        ],
        props: {
            index:{
                type: Number,
                default: 1,
            },
            points: {
                type: String,
                default: "",
            },
            xmult: {
              type: Number,
              default: 1
            },
            ymult: {
                type: Number,
                default: 1,
            },
        },

        data(){
            return {
                started: false,
                _debug: true,
            };
        },
        computed:{},
        methods:{
            shapeClicked() {
                if(!this.animation.running) {
                    this.animation.play('default', 200);
                }
            },

            componentAnimations() {
                return {
                    default:{
                        duration: 500,
                        end: 200,
                        frames: {
                            0:{
                                action: [
                                    this.scaleFixed(1,1),
                                    this.scrollFixed(0, 0)
                                ]
                            },
                            1:{
                                action: [
                                    this.scrollLinear(0, 0.2)
                                ]
                            },
                            250:{
                                action: [
                                    this.scrollLinear(0, -0.2)
                                ],
                            },
                        }
                    }
                };
            },
        },
        components:{
            GPolygon,
        }

    }
</script>

<template>
        <g-polygon :id="`geoshape-${_uid}`" @mouseover.native="shapeClicked" :points="points" :transform="transform" />

</template>

<style scoped>
</style>
