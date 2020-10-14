<script>
    import Bytepath from "bytepath";
    import Coast from "../Coast/Coast";
    import Underwater from "../Underwater/Underwater";
    import Sky from "../Sky/Sky";
    import DoABarrelRoll from "../../Animations/DoABarrelRoll";
    import Pig from "../../Assets/Animals/Pig";
    import KeyframeVisible from "../../../vue/Components/Timers/KeyframeVisible";
    import Cow from "../Farm/Cow";

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
            DoABarrelRoll,
            Pig,
            Cow,
            KeyframeVisible,
            clock: Bytepath.timers.clock,
        },

        animations() {
            return {
                default: [
                    {
                        start: 1400,
                        end: 1650,
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
                            context.pigPos.angle = 360 - tween.number(0, 90);
                            context.pigPos.y = tween.number(0, 1600);
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
                            context.pigPos.y = tween.number(0, 2550);
                        }
                    },

                    {
                        start: 1750,
                        end: 2000,
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
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
                            context.pigPos.angle = 360 - tween.number(145, 90);
                        }
                    },

                    {
                        start: 2150,
                        end: 2500,
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
                            context.underwaterPosition.scaleX = tween.number(1, 0.0001);
                            context.underwaterPosition.scaleY = tween.number(1, 0.0001);
                            context.underwaterPosition.x = tween.number(0, 100);
                            context.underwaterPosition.angle = tween.number(0, 360);
                            context.underwaterPosition.y = tween.number(0, 700);

                            context.pigPos.scaleX = tween.number(1, 0.5);
                            context.pigPos.scaleY = tween.number(1, 0.5);
                        }
                    },




                ]
            };
        },
    });
</script>

<template>
    <vector :show-viewbox="false"  :id="'dogsocean-scene'+_uid" v-bind="$props" overflow="visible">
        <clock :fps="15" :keyframe="keyframe" :start="0" :end="3275" v-slot="clock">
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

            <delay :keyframe="keyframe" :start="1100" v-slot="octopus">
                <underwater :y="1395" color="#42A7B0" :align="'topleft'" :position="underwaterPosition"  :octopus-keyframe="octopus.keyframe" :keyframe="clock.keyframe">
                    <slot />
                </underwater>
            </delay>

            <do-a-barrel-roll :keyframe="keyframe" v-slot="barrel">
                <balloon  :x="-225" :y="500" :sx="0.5" :sy="0.5" v-bind="barrel">
                    <pig v-if="keyframe < 2267" width="90" height="80"  align="topleft" :fit="false"  :x="75" :y="450" :position="pigPos" />
                </balloon>
            </do-a-barrel-roll>
        </g>
        </clock>
    </vector>
</template>




