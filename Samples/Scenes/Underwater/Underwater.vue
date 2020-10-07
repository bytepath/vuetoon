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
            octopusKeyframe: {
                type: Number,
                default: 0,
            },
        },

        components: {
            Background,
            Octopus,
            BigFish,
            YellowFish,
            delay: Bytepath.timers.delay,
            repeat: Bytepath.timers.repeat,
            visible: Bytepath.timers.visible,
        }
    })
</script>

<template>
    <vector :id="'underwater-'+_uid" v-bind="$props" overflow="hidden">
        <background />
        <rect fill="#015191" width="1384" height="300" y="1100" />
        <slot >
            <repeat :repeat="7000" :keyframe="keyframe" v-slot="visible">
                <yellow-fish :x="-700 + (visible.keyframe / 4)" :my="0.4" :mx="1" :y="100"/>
            </repeat>

            <delay :start="300" :keyframe="octopusKeyframe" v-slot="visible">
                <octopus :y="-800 + (visible.keyframe / 2)" color="blue" :x="-300 + (visible.keyframe / 2)" />
            </delay>

            <repeat :repeat="7000" :keyframe="keyframe" v-slot="visible">
            <big-fish :x="700 - (visible.keyframe / 4)" :my="0.5" :y="125"/>
            </repeat>

            <repeat :repeat="8000" :keyframe="keyframe" v-slot="visible">
            <yellow-fish :x="-900 + (visible.keyframe / 4)" :my="0.2" :mx="1.8" :y="0"/>
            </repeat>

<!--            <visible :keyframe="keyframe" v-slot="visible">-->
<!--            <big-fish :x="1900 - visible.keyframe" :y="400" :my="0" :mx="1.5"/>-->
<!--            </visible>-->
        </slot>
    </vector>
</template>
