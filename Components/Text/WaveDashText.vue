<script>
    import AnimationEntity from "../../Mixins/AnimationEntity";
    import TextAnimation from "./TextAnimation";
    import GText from "../../Primitives/GText";

    export default {
        mixins: [
            AnimationEntity,
            TextAnimation,
        ],

        data(){
            this.timer._p();
            return {};
        },

        computed: {},

        methods:{
            componentAnimations() {
                return {
                    default: {
                        duration: 500000,
                        frames: {
                            0: {
                                action: [
                                    this.waveText(this.direction, this.interval, this.pull)
                                ]
                            },
                        },
                    },
                };
            },
        },

        components: {
            GText,
        },
    }
</script>

<template>
    <g>
    <template>
        <g-text :dy="dy" :dx="dx" :id="`fluttertext-${_uid}`" :font-size="fontSize">
            {{ text }}
        </g-text>
    </template>
    </g>
</template>
