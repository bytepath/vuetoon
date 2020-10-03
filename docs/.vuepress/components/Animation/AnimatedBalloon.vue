<script>
    import Bytepath from "bytepath";

    export default Bytepath.CreateAsset({

        data() {
            return { balloonPos: new Bytepath.Position() };
        },

        components: {
            balloon: Bytepath.samples.assets.balloon,
        },

        animations(){
            return {
                default: [
                    {
                        start: 0,
                        end: 100,
                        handler({ context, keyframe }) {
                            /**
                             * Balloon will scroll on the X axis to the value of the :keyframe prop
                             * This effectively means we scroll between X=0 to X=100 depending on keyframe
                             */
                            context.balloonPos.x = keyframe;
                        },
                    },
                ],
            };
        },
    });
</script>

<template>
    <balloon :color="color" :position="balloonPos" />
</template>
