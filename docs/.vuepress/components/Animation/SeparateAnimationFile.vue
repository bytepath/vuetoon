<script>
    import Bytepath from "bytepath";
    import MyAnimation from "./MyAnimation";

    export default Bytepath.CreateAsset({
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
                default: MyAnimation,
            };
        },
    });
</script>

<template>
    <balloon :position="balloonPos" />
</template>
