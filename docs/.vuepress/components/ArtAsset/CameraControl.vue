<template>
    <!-- CameraControl.vue -->
    <div>
        <input type="range" v-model.number="currentFrame" :min="0" :max="2500"> Current Frame = {{ currentFrame }}
        <input type="range" v-model.number="myCamera.x" :min="0" :max="600"> X = {{ myCamera.x }}
        <input type="range" v-model.number="myCamera.y" :min="0" :max="1200"> Y = {{ myCamera.y }}
        <input type="range" v-model.number="zoom" :min="0" :max="10"> Zoom = {{ zoom }}

        <timer :fps="10" v-slot="clock">
            <ocean-scene align="topleft" :fit="false" :show-viewbox="true" :camera="myCamera" :keyframe="clock.keyframe"/>
        </timer>
    </div>
</template>

<script>
    import Bytepath from "bytepath";

    let _k = Bytepath.CreateKeyframe;
    import OceanScene from "../../../../Samples/Scenes/Ocean/OceanScene";

    export default Bytepath.CreateAsset({
        name: "CameraExample",
        mixins: [],
        props: {},

        data() {
            return {
                zoom: 1,
                currentFrame: 0,
                myCamera: new Bytepath.Position({
                    scaleX: 1,
                    scaleY: 1,
                    width: 300,
                    height: 250,
                }),
            };
        },

        watch: {
            zoom() {
                this.myCamera.scaleX = this.zoom;
                this.myCamera.scaleY = this.zoom;
            },
        },

        components: {
            OceanScene,
            timer: Bytepath.timers.clock,
        }
    });
</script>
