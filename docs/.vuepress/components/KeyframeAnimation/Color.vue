<script>
    import Bytepath from "bytepath";
    let Balloon =  Bytepath.samples.assets.balloon;

    export default Bytepath.CreateAsset({
        components: { Balloon },

        animations() {
            return {
                default: [
                    // Frames 0 to 1000: Green to Blue
                    {
                        start: 0,
                        end: 1000,
                        handler({context, tween }) {
                            context.defaultColor = tween.hex("#0000FF", "#FF0000");
                        }
                    },

                    // Frames 1000 to 2000: Green to Blue
                    {
                        start: 1000,
                        end: 2000,
                        handler({context, tween }) {
                            context.defaultColor = tween.hex("#FF0000", "#00FF00");
                        }
                    },

                    // Frames 2000 to 3000: Green to Blue
                    {
                        start: 2000,
                        end: 3000,
                        handler({context, tween }) {
                            context.defaultColor = tween.hex("#00FF00", "#0000FF");
                        }
                    },
                ]
            };
        }
    });
</script>

<template>
    <div>
        <balloon :color="defaultColor" />
    </div>
</template>
