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
    <scroll v-slot="{ keyframe }" auto-play>
            <ocean-scene style="fill:#90CDF4;" class="text-blue-300" :keyframe="keyframe"/>
    </scroll>
</template>
