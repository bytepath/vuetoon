<script>
    import Bytepath from "bytepath";
    import OceanScene from "../../../Samples/Scenes/Ocean/OceanScene";
    import Farm from "../../../Samples/Scenes/Farm/Farm";

    export default {
        data(){
            return {};
        },

        components: {
            OceanScene,
            Farm,
            scroll: Bytepath.timers.scroll,
            //vector: Bytepath.graphics.vector,
        },
    };
</script>

<template>
    <div>
    <scroll v-slot="{ keyframe }" auto-play>
        <ocean-scene  :width="500" :height="500" :show-viewbox="true" style="fill:#90CDF4;"  :keyframe="keyframe"/>
    </scroll>
    <div style="height:125vh;"></div>
    </div>
</template>
