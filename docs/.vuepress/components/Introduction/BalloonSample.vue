<script>
    import Bytepath from "bytepath";

    export default {
        components: {
            balloon: Bytepath.samples.assets.balloon,
        },
    }
</script>

<template>
    <div>
        <balloon color="red" />
        <balloon color="blue" />
        <balloon color="green" />
        <balloon color="orange" />
    </div>
</template>
