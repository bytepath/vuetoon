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
                pigPos: new Bytepath.Position({}),
                underwaterPosition: new Bytepath.Position(),
            };
        },

        components: {
            'delay': Bytepath.timers.delay,
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
                default: [
                    {
                        start: 1400,
                        end: 1650,
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
                            context.pigPos.centerX = 750;
                            context.pigPos.centerY = 450;

                            context.pigPos.angle = 360 - tween.number(0, 90);
                            context.pigPos.y = tween.number(0, 1200);
                        }
                    },

                    {
                        start: 1406,
                        end: 1700,
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
                            context.pigPos.x = tween.number(0, -1000);
                        }
                    },

                    {
                        start: 1406,
                        end: 2750,
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
                            context.pigPos.y = tween.number(0, 2250);
                        }
                    },

                    {
                        start: 1750,
                        end: 2000,
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
                            context.pigPos.centerX = 750;
                            context.pigPos.centerY = 450;
                            context.pigPos.angle = 360 - tween.number(90, 145);
                        }
                    },

                    {
                        start: 1750,
                        end: 2200,
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
                            context.pigPos.x = tween.number(-1000, -600);
                        }
                    },

                    {
                        start: 2030,
                        end: 3280,
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
                            context.pigPos.centerX = 750;
                            context.pigPos.centerY = 450;
                            context.pigPos.angle = 360 - tween.number(145, 90);
                        }
                    },

                    {
                        start: 2386,
                        end: 3300,
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
                            context.underwaterPosition.scaleX = tween.number(1, 0.0001);
                            context.underwaterPosition.scaleY = tween.number(1, 0.0001);
                            context.pigPos.scaleX = tween.number(1, 0.5);
                            context.pigPos.scaleY = tween.number(1, 0.5);
                        }
                    },
                    
                    {
                        start: 2672,
                        end: 3300,
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
                            context.pigPos.x = 0;
                            context.pigPos.y = 0;
                        }
                    },


                ]
            };
        },
    });
</script>

<template>
    <scene  :id="'dogsocean-scene'+_uid" v-bind="$props">
        <g>


            <delay :keyframe="keyframe" :start="0" v-slot="reset">
                <sky :keyframe="reset.keyframe">
                    <g>
                        <delay :keyframe="keyframe" :start="1100" v-slot="reset">
                            <coast :keyframe="reset.keyframe" transform="translate(0 1105)"/>
                        </delay>
                    </g>
                    <slot />
                </sky>
            </delay>

            <delay :keyframe="keyframe" :start="1100" v-slot="reset">
                <underwater :y="1600" :position="underwaterPosition" :keyframe="reset.keyframe">
                    <slot name="underwater" >
                        <yellow-fish :x="-700 + reset.keyframe" :my="0.4" :mx="1" :y="100"/>

                        <delay :start="1400" :keyframe="keyframe" v-slot="visible">
                            <octopus :y="-800 + (visible.keyframe / 2)" color="blue" :x="-300 + (visible.keyframe / 2)" />
                        </delay>

                        <big-fish :x="1500 - reset.keyframe" :my="0.5" :y="125"/>
                        <yellow-fish :x="-900 + reset.keyframe" :my="0.2" :mx="1.8" :y="0"/>
                        <big-fish :x="1900 - reset.keyframe" :y="400" :my="0" :mx="1.5"/>
                    </slot>
                </underwater>
            </delay>

            <do-a-barrel-roll :keyframe="keyframe" v-slot="barrel">
                <balloon overflow="visible" :x="-225" :y="500" :sx="0.5" :sy="0.5" v-bind="barrel">
                    <pig  :x="-1400" :y="-500" overflow="visible" :position="pigPos" />
                </balloon>
            </do-a-barrel-roll>
        </g>
    </scene>
</template>




