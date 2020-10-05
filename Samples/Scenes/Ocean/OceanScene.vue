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
            //UnderwaterFilter,
            //DropShadow,
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
    <vector :id="'ocean-scene'+_uid" v-bind="$props" overflow="hidden">
        <g>
            <reset :keyframe="keyframe" :start="0" v-slot="reset">
                <sky :show-viewbox="false" :keyframe="reset.keyframe">
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

            <reset :keyframe="keyframe" :start="1100" v-slot="reset">
                <coast :keyframe="reset.keyframe" transform="translate(0 1105)"/>
            </reset>

            <reset :keyframe="keyframe" :start="1100" v-slot="reset">
                <underwater style="fill: red;" :keyframe="reset.keyframe" transform="translate(0 1600)">
                    <slot name="underwater" >
                        <yellow-fish :x="-800" :y="-100" :sy="(reset.keyframe / 600)" :sx="(reset.keyframe / 350)" />
                        <yellow-fish :x="-700 + reset.keyframe" :my="0.4" :mx="1" :y="550"/>

                        <big-fish :x="1500 - reset.keyframe" :my="0.5" :y="125"/>
                        <yellow-fish :x="-900 + reset.keyframe" :my="0.2" :mx="1.8" :y="625"/>
                        <big-fish :x="1900 - reset.keyframe" :y="400" :my="0" :mx="1.5"/>
                    </slot>
                </underwater>
            </reset>
        </g>
    </vector>
</template>




