<script>
    import Bytepath from "bytepath";

    export default Bytepath.CreateAsset({
        data() {
            return {
                balloonPos: new Bytepath.Position(),
                currentFrame: 0,
            };
        },

        components: {
            balloon: Bytepath.samples.assets.balloon,
        },

        animations(){
            return {
                default: [
                    {
                        name: "Moves right from 0 to 500",
                        start: 0,
                        end: 500,
                        handler({ context, keyframe }) {
                            let frame = Math.floor(keyframe / 2);
                            context.balloonPos.x = frame;
                        },
                    },
                    {
                        name: "Moves Down and right while rotating frames 501 to 1000",
                        start: 501,
                        end: 1000,
                        handler({ context, keyframe }) {
                            let frame = Math.floor(keyframe / 2);
                            context.balloonPos.x = frame;
                            context.balloonPos.y = frame - 201;
                            context.balloonPos.angle = frame % 360;
                        },
                    },

                    /**
                     *
                     *  NOTE THE GAP BETWEEN PREVIOUS END (1000) and New Start (1500)
                     *  THIS MEANS WE DO NOTHING FROM FRAMES 1000 - 1500
                     */


                    {
                        name: "Scale x and y without moving from 1500 to 2500",
                        start: 1500,
                        end: 2500,
                        handler({ context, keyframe }) {
                            let frame = Math.floor(keyframe / 10);
                            let scale = ((keyframe - 1000) / 250);
                            context.balloonPos.y = (365 - 201) - frame;
                            context.balloonPos.scaleX = scale;
                            context.balloonPos.scaleY = scale;
                        },
                    }
                ],
            };
        },
    });
</script>

<template>
    <balloon anim="dog" :position="balloonPos" />
</template>
