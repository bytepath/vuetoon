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
            "keyframe-visible": Bytepath.timers.visible,

        },
    });
</script>

<template>
    <svg width="auto" height="500" viewBox="0 0 1384 1000">
        <underwater :show-viewbox="true" v-bind="$props" overflow="hidden">
            <g>
                <keyframe-delay :keyframe="keyframe"  v-slot="delay">
                    <keyframe-visible v-bind="delay" v-slot="visible">
                        <octopus color="blue" :y="-300" :x="visible.keyframe"/>
                    </keyframe-visible>
                </keyframe-delay>

                <keyframe-delay :start="1000" :keyframe="keyframe"  v-slot="delay">
                    <keyframe-visible v-bind="delay" v-slot="visible">
                        <octopus color="blue" :y="-50" :x="visible.keyframe"/>
                    </keyframe-visible>
                </keyframe-delay>

                <keyframe-delay :start="2000" :keyframe="keyframe"  v-slot="delay">
                    <keyframe-visible v-bind="delay" v-slot="visible">
                        <octopus color="blue" :y="200" :x="visible.keyframe"/>
                    </keyframe-visible>
                </keyframe-delay>
            </g>
        </underwater>
    </svg>
</template>
