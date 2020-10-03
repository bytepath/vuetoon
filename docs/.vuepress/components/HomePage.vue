<script>
    import Bytepath from "bytepath";
    import OceanScene from "../../../Samples/Scenes/Ocean/OceanScene";
    import Farm from "../../../Samples/Scenes/Farm/Farm";
    import UnderwaterFilter from "../../../Samples/Filters/UnderwaterFilter";

    export default {
        data(){
            return {
                underwater: UnderwaterFilter,
            };
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
        <div>
            <ocean-scene style="fill:#90CDF4;" class="text-blue-300" :keyframe="keyframe"/>
            <farm />
        </div>
    </scroll>
    <div style="height:125vh;"></div>
    </div>
</template>
