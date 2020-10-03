<script>
    import Bytepath from "bytepath";
    import Coast from "../Coast/Coast";
    import Underwater from "../Underwater/Underwater";
    import Sky from "../Sky/Sky";
    import YellowFish from "../../Assets/Fish/YellowFish";
    import BigFish from "../../Assets/Fish/BigFish";
    import Octopus from "../../Assets/Fish/Octopus";

    export default Bytepath.CreateAsset({
        name: "ocean-scene",
        layers: [],
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
            AnimatedBalloon: Bytepath.samples.assets.animatedBalloon,
            Coast,
            Sky,
            Underwater,
            YellowFish,
            BigFish,
            Octopus,
        },

        animations() {
            return {
                default: [
                    {
                        start: 0,
                        end: 970,
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
                            context.balloonPos.x = tween.number(100, 500);
                            context.position.centerX = null;
                            context.position.centerY = null;
                        }
                    },

                    {
                        start: 100,
                        end: 970,
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
                            context.balloonPos.angle = 360 - tween.number(0, 360);
                            context.position.centerX = 100;
                            context.position.centerY = 0;
                        }
                    },

                    {
                        start: 970,
                        end: 1000,
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
                            context.balloonPos.x = tween.number(500, 850);
                            context.position.centerX = null;
                            context.position.centerY = null;

                            //:sy="(keyframe < 2160)? ((keyframe > 1080)?((100 - (keyframe - 1080)) / 1000):0):-.999"
                            //:y="(keyframe > 1080)?(keyframe - 1080):0"
                        }
                    },

                    {
                        start: 1000,
                        end: 1200,
                        // eslint-disable-next-line
                        handler({context, tween, keyframe}) {
                            context.balloonPos.y = tween.number(0, 620);
                            context.position.centerX = null;
                            context.position.centerY = null;

                            if (context.balloonPos.x < 850) {
                                console.log();
                            }
                            //:sy="(keyframe < 2160)? ((keyframe > 1080)?((100 - (keyframe - 1080)) / 1000):0):-.999"
                            //:y="(keyframe > 1080)?(keyframe - 1080):0"
                        }
                    }
                ],
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
    <vector :id="'ocean-scene'+_uid" v-bind="$props" aspect="xMinYMin meet">
        <g :transform="transform">
            <reset :keyframe="keyframe" :start="0" v-slot="reset">
                <sky :keyframe="reset.keyframe">
                    <animated-balloon color="pink" :cx="100" :sx="3" :sy="3" :y="700" anim="loopThenLand" :keyframe="reset.keyframe" />
                    <slot />
                </sky>
            </reset>

            <reset :keyframe="keyframe" :start="1000" v-slot="reset">
                <coast :keyframe="reset.keyframe" transform="translate(0 1105)"/>
            </reset>

            <reset :keyframe="keyframe" :start="1050" v-slot="reset">
                <underwater style="fill: red;" :keyframe="reset.keyframe" :crabs="crabs" transform="translate(0 1600)">
                    <slot name="underwater" >
                        <yellow-fish :x="-800" :y="-100" :sy="(keyframe / 600)" :sx="(keyframe / 350)" />
                        <yellow-fish :x="-700 + keyframe" :my="0.4" :mx="1" :y="550"/>

                        <big-fish :x="1500 - keyframe" :my="0.5" :y="125"/>
                        <yellow-fish :x="-900 + keyframe" :my="0.2" :mx="1.8" :y="625"/>
                        <big-fish :x="1900 - keyframe" :y="400" :my="0" :mx="1.5"/>
                    </slot>
                </underwater>
            </reset>
        </g>
    </vector>
</template>




