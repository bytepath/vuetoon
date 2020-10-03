<script>
    import Bytepath from "bytepath";
    import KeyframeSlider from "./KeyframeSlider";
    export default {



        props: {
            title: {
                type: String,
                default: null
            },

            start: {
                type: Number,
                default: 0,
            },

            end: {
                type: Number,
                default: null,
            }
        },

        data() {
            return {
                currentFrame: 0,
            };
        },

        components: {
            KeyframeSlider,
        },
    }
</script>

<template>
    <div>
        <KeyframeSlider :start="start" :end="end" v-slot="{ keyframe }">
            <slot :keyframe="keyframe" />
        </KeyframeSlider>
        <br/>
        <br/>
    </div>
</template>
