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
                <farm :y="2500"/>
                <rect x="0" y="1500" width="1380" height="1000" style="fill: #E3DAA6;" />
                <ocean-scene :show-viewbox="false" style="fill:#90CDF4;" :keyframe="keyframe"/>
            </svg>
        </scroll>
        <div style="height: 75vh;"></div>
    </div>
</template>
