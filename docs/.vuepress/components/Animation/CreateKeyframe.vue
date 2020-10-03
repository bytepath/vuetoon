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
                    _k(0, 100, ({context, keyframe}) => {
                        context.balloonPos.x = keyframe;
                    }),
                ],
            };
        },
    });
</script>

<template>
    <balloon color="orange" :position="balloonPos"/>
</template>
