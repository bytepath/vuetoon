<script>
    import Background from "./Background";
    import CreateAsset from "../../../Factories/CreateAsset";
    import Bytepath from "../../../vue-bytepath";
    import YellowFish from "./YellowFish";
    import BigFish from "./BigFish";
    import Octopus from "./Octopus";
    import src from "./underwaterartboard.svg";

    export default CreateAsset({
        name: "underwater",
        src,
        layer: 'theart',

        props: {
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
    <vector :id="'underwater-'+_uid" :style="{fill: defaultColor }" v-bind="$props" v-slot="">
        <template v-if="layers">
            <layer :layer="layers['background']"/>

            <slot></slot>
            <repeat :repeat="7000" :keyframe="keyframe" v-slot="visible">
                <layer :layer="layers['yellowfish']" :x="-700 + (visible.keyframe / 4)" :my="0.4" :mx="1" :y="100"/>
            </repeat>

            <delay :start="300" :keyframe="octopusKeyframe" v-slot="visible">
                <layer :layer="layers['octopus']" :y="-1200 + (visible.keyframe / 2)" color="blue" :x="-300 + (visible.keyframe / 2)"/>
            </delay>

            <repeat :repeat="7000" :keyframe="keyframe" v-slot="visible">
                <layer :layer="layers['bigfish']" :x="700 - (visible.keyframe / 4)" :my="0.5" :y="125"/>
            </repeat>

            <repeat :repeat="8000" :keyframe="keyframe" v-slot="visible">
                <layer :layer="layers['yellowfish']" :x="-900 + (visible.keyframe / 4)" :my="0.2" :mx="1.8" :y="0"/>
            </repeat>

            <repeat :repeat="8000" :keyframe="keyframe" v-slot="visible">
                <layer :layer="layers['bigfish']" :x="1900 - visible.keyframe" :y="400" :my="0" :mx="1.5"/>
            </repeat>

            <layer :layer="layers['foreground']"/>
        </template>
    </vector>
</template>
