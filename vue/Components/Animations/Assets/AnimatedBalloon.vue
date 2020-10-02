<script>
    /**
     * Note to docs readers:
     * The directory structure is a bit different than other examples because its in the bytepath core.
     * Dont think too much about this.
     */
    import CreateAsset from '../../../Factories/CreateAsset';
    import Position from '../../../../Helpers/Position';
    import _k from '../../../Factories/CreateKeyframe';
    import Balloon from "./Balloon";

    export default CreateAsset({
        data() {
            return {
                balloonPos: new Position({}),
            }
        },

        animations() {
            return {
                /**
                 * By default we dont play any animation
                 */
                default: null,

                /**
                 * This is the amimation from the docs that scrolls the balloon from X=0 to X=100.
                 * Using a functional style we can fit the whole animation on a single line.
                 */
                babystep: [ _k(0, 100, ({context, keyframe}) => context.defaultPosition.x = keyframe) ],

                /**
                 * Rotates in place for infinity seconds
                 */
                spin: [ _k(0, 1000, ({context, tween}) => {
                    context.defaultPosition.angle = tween.number(0, 360);
                })],

                /**
                 * Translates the balloon in a circular motion for infinity seconds
                 */
                circle: [
                    _k(0, ({context, keyframe}) => {
                        context.defaultPosition.x = Math.sin(keyframe / 100) * 300;
                        context.defaultPosition.y = Math.cos(keyframe / 100) * 300;
                    }),
                ],

                /**
                 * The animation used on the bytepath homepage that does a loop then lands next to the lighthouse
                 */
                loopThenLand:
                    [
                        // Translate X from 100 to 500
                        _k(0, 970, ({context, tween}) => context.defaultPosition.x = tween.number(100, 500)),

                        // From 100 to 970 rotate with our center position set to 100, 0 so we do a big circle
                        _k(100, 970, ({context, tween}) => {
                            context.defaultPosition.angle = 360 - tween.number(0, 360);
                            context.defaultPosition.centerX = 100;
                            context.defaultPosition.centerY = 0;
                        }),

                        // Move very quickly on X direction.
                        _k(970, 1000, ({context, tween}) => context.defaultPosition.x = tween.number(500, 850)),

                        // Land the balloon next to the lighthouse
                        _k(1000, 1200, ({context, tween}) => context.defaultPosition.y = tween.number(0, 1150)),
                    ],

                /**
                 * Cycles the color of the balloon from R to G to B
                 */
                changeColor:
                    [
                        _k(0, 1000, ({context, tween}) => context.defaultColor = tween.hex("#0000FF", "#FF0000")),
                        _k(1000, 2000, ({context, tween}) => context.defaultColor = tween.hex("#FF0000", "#00FF00")),
                        _k(2000, 3000, ({context, tween}) => context.defaultColor = tween.hex("#00FF00", "#0000FF")),
                    ],
            }
                ;
        },

        components: {Balloon},
    });
</script>

<template>
    <balloon :color="defaultColor" :sx="$props.sx" :sy="$props.sy" :keyframe="keyframe" :position="defaultPosition" />
</template>
