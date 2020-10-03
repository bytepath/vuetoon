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
        <div id="app" style="position:relative; width: 100%; height: 100vh; fill:#90CDF4;">
            <ocean-scene style="position:absolute;" class="text-blue-300"
                         :keyframe="keyframe"/>
            <div style="height: 1000vh;"></div>
        </div>
    </scroll>
</template>
