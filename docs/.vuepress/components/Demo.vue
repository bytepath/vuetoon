<script>
    import KeyframeSlider from "./KeyframeSlider";
    export default {
        name: "Demo",
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
            },

            src: {
                type: String,
                required: true,
            }
        },

        data() {
            return {
                currentFrame: 0,
                theDemo: null,
            };
        },

        mounted() {
            if(this.src) {
                console.log("demo import demo is", this.src);
                this.theDemo = this.src;
            }
        },

        components: {
            KeyframeSlider,
        },
    }
</script>

<template>
    <div>
        <KeyframeSlider :start="start" :end="end" v-slot="{ keyframe }">
            <component :is="theDemo" v-if="theDemo" :keyframe="keyframe" />
        </KeyframeSlider>
        <br/>
        <br/>
    </div>
</template>
