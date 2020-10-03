<script>
    import Bytepath from "bytepath";
    let _k = Bytepath.CreateKeyframe;

    export default Bytepath.CreateAsset({
        name: "RenderessExample",
        data() {
            return {
                balloonPos: new Bytepath.Position(),
            };
        },

        components: {
            balloon: Bytepath.samples.assets.balloon,
        },

        animations(){
            return {
                default: [
                    _k(0, 1000, ({ context, tween }) => {
                        context.defaultColor = tween.hex("#FF00FF", "#FFFFFF");
                    }),
                ],
            };
        },
    });
</script>

<template>
    <balloon :keyframe="keyframe" :repeat="true" :anim="animations.default" />
</template>
