<script>
    import Bytepath from "bytepath";

    export default Bytepath.CreateAsset({
        props: {
            color: {
                type: String,
                default: "red",
            }
        },

        components: {
            vector: Bytepath.graphics.vector,
        }
    });
</script>

<template>
    <vector v-bind="$props" aspect="xMidYMax meet">
        <rect width="50" height="50" :fill="color" />
    </vector>
</template>
