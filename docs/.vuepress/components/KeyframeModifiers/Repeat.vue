<script>
    import Bytepath from "bytepath";
    import Underwater from "../../../../Samples/Scenes/Underwater/Underwater";
    import Octopus from "../../../../Samples/Assets/Fish/Octopus";

    export default Bytepath.CreateAsset({
        name: "RepeatExample",
        layers: [],
        viewport: true,
        components: {
            Underwater,
            Octopus,
            "keyframe-repeat": Bytepath.timers.repeat,
        },
    });
</script>

<template>
    <svg width="auto" height="500" viewBox="0 0 1384 1000">
        <underwater :show-viewbox="true" v-bind="$props" overflow="hidden">
            <g>
                <keyframe-repeat :repeat="250" :keyframe="keyframe" v-slot="delay">
                    <octopus color="blue" :y="-300" :x="delay.keyframe"/>
                </keyframe-repeat>

                <keyframe-repeat :repeat="500" :keyframe="keyframe" v-slot="delay">
                    <octopus color="blue" :y="-50" :x="delay.keyframe"/>
                </keyframe-repeat>

                <keyframe-repeat :repeat="1000" :keyframe="keyframe" v-slot="delay">
                    <octopus color="blue" :y="200" :x="delay.keyframe"/>
                </keyframe-repeat>
            </g>
        </underwater>
    </svg>
</template>
