<script>
    export default {
        name: "KeyframeSlider",
        props: {
            start: {
                type: Number,
                default: 0,
            },

            end: {
                type: Number,
                default: 1000,
            }
        },

        data() {
            return {
                currentFrame: 0,
            };
        },
    }
</script>

<template>
    <div>
        <input type="range" v-model.number="currentFrame" :min="start" :max="end"> Current Frame = {{ currentFrame }}
        <br/>
        <slot :keyframe="currentFrame" />
    </div>
</template>
