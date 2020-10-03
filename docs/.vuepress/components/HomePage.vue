<script>
    import Bytepath from "bytepath";
    import OceanScene from "../../../Samples/Scenes/Ocean/OceanScene";

    export default {
        components: {
            OceanScene,
            scroll: Bytepath.timers.scroll,
        },
    };
</script>

<template>
    <scroll :speed="10" :fps="10" v-slot="{ keyframe }" auto-play>
            <ocean-scene class="text-blue-300" :keyframe="keyframe"/>
    </scroll>
</template>
