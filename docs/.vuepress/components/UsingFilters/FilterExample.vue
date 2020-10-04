<script>
    import Bytepath from "bytepath";

    import OceanScene from "../../../../Samples/Scenes/Ocean/OceanScene";
    import EnterTheMatrix from "../../../../Samples/Filters/EnterTheMatrix";

    export default Bytepath.CreateAsset({
        name: "FilterExample",

        data() {
            return { useFilter: EnterTheMatrix };
        },

        components: {
            OceanScene,
        }
    });
</script>

<template>
    <!-- FilterExample.vue -->
    <svg width="500"  viewBox="0 0 1384 1700">
        <ocean-scene align="topleft" :fit="false" :camera="useCamera" :filter="useFilter" :keyframe="keyframe"/>
    </svg>
</template>
