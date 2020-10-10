<script>
    import Bytepath from "bytepath";
    import Underwater from "../../../../Samples/Scenes/Underwater/Underwater";
    import Octopus from "../../../../Samples/Scenes/Underwater/Octopus";
    import KeyframeVisible from "../../../../vue/Components/Timers/KeyframeVisible";

    export default Bytepath.CreateAsset({
        name: "HiddenExample",
        layers: [],
        viewport: true,
        components: {
            Underwater,
            Octopus,
            KeyframeVisible,
        },
    });
</script>

<template>
    <svg width="auto" height="500" viewBox="0 0 1384 1000">
        <underwater :show-viewbox="true" v-bind="$props" overflow="hidden">

            <!-- Repeats when the octopus goes off screen -->
            <keyframe-visible :keyframe="keyframe" v-slot="visible">
                <octopus color="blue" :x="-500 + (visible.keyframe)"/>
            </keyframe-visible>
        </underwater>
    </svg>
</template>
