<script>
    import Bytepath from "bytepath";
    import Coast from "../Coast/Coast";
    import Underwater from "../Underwater/Underwater";
    import Sky from "../Sky/Sky";
    import YellowFish from "../../Assets/Fish/YellowFish";
    import BigFish from "../../Assets/Fish/BigFish";
    import Octopus from "../../Assets/Fish/Octopus";
    import DoABarrelRoll from "../../Animations/DoABarrelRoll";
    import Pig from "../../Assets/Animals/Pig";
    import KeyframeVisible from "../../../vue/Components/Timers/KeyframeVisible";

    export default Bytepath.CreateAsset({
        name: "ocean-scene",
        layers: [],
        viewport: true,

        props: {
            // Do we show the underwater crabs and plants or no
            crabs: {
                type: Boolean,
                default: false,
            },
        },

        data() {
            return {
                balloonPos: new Bytepath.Position({}),
            };
        },

        components: {
            reset: Bytepath.timers.reset,
            ...Bytepath.samples.assets,
            Coast,
            Sky,
            Underwater,
            YellowFish,
            BigFish,
            Octopus,
            DoABarrelRoll,
            Pig,
            KeyframeVisible,
        },

        animations() {
            return {
                changecolor: [
                    {
                        start: 0,
                        end: 4000,
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
                            context.defaultColor = tween.hex("#FFFFFF", "#FF0000");
                        }
                    },
                ]
            };
        },
    });
</script>

<template>
    <vector :id="'ocean-scene'+_uid" overflow="hidden" v-bind="$props">
        <g>
            <reset :keyframe="keyframe" :start="0" v-slot="reset">
                <sky :keyframe="reset.keyframe">
                    <do-a-barrel-roll :keyframe="reset.keyframe" v-slot="barrel">
                        <g>
                            <balloon :x="-225" :y="500" :sx="0.5" :sy="0.5" v-bind="barrel">
                                <pig  :x="-1400" :y="-500" />
                            </balloon>
                        </g>
                    </do-a-barrel-roll>
                    <slot />
                </sky>
            </reset>
        </g>
    </vector>
</template>




