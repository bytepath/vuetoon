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
                        handler({ context, tween }) {
                            context.balloonPos.x = tween.number(0, 250);
                        },
                    },
                    {
                        name: "Moves Down and right while rotating frames 501 to 1000",
                        start: 501,
                        end: 1000,
                        handler({ context, tween }) {
                            context.balloonPos.x = tween.number(250, 500);
                            context.balloonPos.x = tween.number(300, 280);
                            context.balloonPos.angle = tween.number(0, 270);
                        },
                    },

                    /**
                     *
                     *  NOTE THE GAP BETWEEN PREVIOUS END (1000) and New Start (1500)
                     *  THIS MEANS WE DO NOTHING FROM FRAMES 1000 - 1500
                     */


                    {
                        name: "Double the scale of the balloon from 1500 to 2500",
                        start: 1500,
                        end: 2500,
                        handler({ context, tween }) {
                            context.balloonPos.scaleX = tween.number(1, 2);
                            context.balloonPos.scaleY = tween.number(1, 2);
                        },
                    }
                ],
            };
        },
    });
</script>

<template>
    <balloon color="blue" :position="balloonPos" />
</template>
