<script>
    import Bytepath from "bytepath";

    let _k = Bytepath.CreateKeyframe;

    export default Bytepath.CreateAsset({
        data() {
            return {
                balloonPos: new Bytepath.Position(),
            };
        },

        components: {
            balloon: Bytepath.samples.assets.balloon,
        },

        animations() {
            return {
                default: [
                    /** From frame 0 to frame 100 scroll on the x axis **/
                    _k(0, 100, ({context, keyframe}) => {
                        context.balloonPos.x = keyframe * 3;
                    }),

                    /** From frame 100 to frame 200 perform a rotation **/
                    _k(100, 200, ({context, keyframe}) => {
                        context.balloonPos.angle = 100 - keyframe;
                    }),

                    /** From frame 200 to frame 300 scroll on the y axis **/
                    _k(200, 300, ({context, keyframe}) => {
                        context.balloonPos.y = 200 - keyframe;
                    }),
                ],
            };
        },
    });
</script>

<template>
    <balloon :position="balloonPos"/>
</template>
