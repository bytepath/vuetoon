<script>
    import Background from "./Background";
    import CreateAsset from "../../../Factories/CreateAsset";
    import Bytepath from "../../../vue-bytepath";
    import YellowFish from "../../Assets/Fish/YellowFish";
    import BigFish from "../../Assets/Fish/BigFish";
    import Octopus from "../../Assets/Fish/Octopus";

    export default CreateAsset({
        props:{
            // Do we show the crabs and plants or no
            crabs: {
                type: Boolean,
                default: true,
            },
        },

        components: {
            Background,
            Octopus,
            BigFish,
            YellowFish,
            delay: Bytepath.timers.delay,
        }
    })
</script>

<template>
    <vector :id="'underwater-'+_uid" v-bind="$props" overflow="hidden">
        <background />
        <rect fill="#015191" width="1384" height="300" y="1100" />
        <slot >
            <yellow-fish :x="-700 + keyframe" :my="0.4" :mx="1" :y="100"/>

            <delay :start="300" :keyframe="keyframe" v-slot="visible">
                <octopus :y="-800 + (visible.keyframe / 2)" color="blue" :x="-300 + (visible.keyframe / 2)" />
            </delay>

            <big-fish :x="1500 - keyframe" :my="0.5" :y="125"/>
            <yellow-fish :x="-900 + keyframe" :my="0.2" :mx="1.8" :y="0"/>
            <big-fish :x="1900 - keyframe" :y="400" :my="0" :mx="1.5"/>
        </slot>
    </vector>
</template>
