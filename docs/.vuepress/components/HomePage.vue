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
            <svg viewBox="0 0 1384 10000">
                <ocean-scene :show-viewbox="false" style="fill:#90CDF4;" :keyframe="keyframe"/>
                <farm :y="2800"/>
            </svg>
        </scroll>
        <div style="height: 75vh;"></div>
    </div>
</template>
