<script>
    import Bytepath from "bytepath";
    import OceanScene from "../../../Samples/Scenes/Ocean/OceanScene";
    import Farm from "../../../Samples/Scenes/Farm/Farm";

    export default {
        data() {
            return {};
        },

        components: {
            OceanScene,
            Farm,
            scroll: Bytepath.timers.scroll,
            scene: Bytepath.graphics.scene,
        },
    };
</script>

<template>
    <div>
        <div style="height: 75vh;"></div>
        <scroll v-slot="{ keyframe }" auto-play>
            <svg viewBox="0 0 1380 10000" >

                <farm color="#6E5C5C" :keyframe="keyframe" :y="2500"/>

                <ocean-scene :show-viewbox="false" style="fill:#90CDF4;" :keyframe="keyframe"/>
            </svg>
        </scroll>
        <div style="height: 75vh;"></div>
    </div>
</template>
