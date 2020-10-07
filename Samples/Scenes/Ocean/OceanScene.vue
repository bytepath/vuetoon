<script>
    import Bytepath from "bytepath";
    import Coast from "../Coast/Coast";
    import Underwater from "../Underwater/Underwater";
    import Sky from "../Sky/Sky";
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
                pigPos: new Bytepath.Position({
                    centerX: 750,
                    centerY: 450,
                }),
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
                        start: 2550,
                        end: 3300,
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
                            context.underwaterPosition.scaleX = tween.number(1, 0.0001);
                            context.underwaterPosition.scaleY = tween.number(1, 0.0001);
                            context.underwaterPosition.x = tween.number(0, 100);
                            context.underwaterPosition.angle = tween.number(0, 360);
                            context.underwaterPosition.y = tween.number(0, 1000);

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
                <underwater :y="1600" :position="underwaterPosition" :keyframe="reset.keyframe" overflow="hidden" />
            </delay>

            <do-a-barrel-roll :keyframe="keyframe" v-slot="barrel">
                <balloon overflow="visible" :x="-225" :y="500" :sx="0.5" :sy="0.5" v-bind="barrel">
                    <pig  :x="-1400" :y="-500" overflow="visible" :position="pigPos" />
                </balloon>
            </do-a-barrel-roll>
        </g>
    </scene>
</template>




