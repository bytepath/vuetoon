<script>
    import Bytepath from "bytepath";
    import Underwater from "../../../../Samples/Scenes/Underwater/Underwater";
    import Octopus from "../../../../Samples/Scenes/Underwater/Octopus";

    export default Bytepath.CreateAsset({
        name: "DelayExample",
        layers: [],
        viewport: true,
        components: {
            Underwater,
            Octopus,
            "keyframe-delay": Bytepath.timers.delay,
        },
    });
</script>

<template>
    <svg width="auto" height="500" viewBox="0 0 1384 1000">
        <underwater :show-viewbox="true" v-bind="$props" overflow="hidden">
            <g>
                <!-- Start animating at frame 0 -->
                <keyframe-delay :keyframe="keyframe" v-slot="delay">
                    <octopus color="blue" :y="-300" :x="delay.keyframe"/>
                </keyframe-delay>

                <!-- Start at frame 500 -->
                <keyframe-delay :start="500" :keyframe="keyframe" v-slot="delay">
                    <octopus color="blue" :y="-50" :x="delay.keyframe"/>
                </keyframe-delay>

                <!-- Starts at frame 1000 -->
                <keyframe-delay :start="1000" :keyframe="keyframe" v-slot="delay">
                    <octopus color="blue" :y="200" :x="delay.keyframe"/>
                </keyframe-delay>
            </g>
        </underwater>
    </svg>
</template>
