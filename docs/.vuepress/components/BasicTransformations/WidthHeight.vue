<script>
    import Bytepath from "bytepath";

    export default {
        components: {
            vector: Bytepath.graphics.vector,
        }
    }
</script>

<template>
    <svg width="500" height="100">
        <vector :width="10" :height="10">
            <rect width="100" height="50" fill="red"/>
        </vector>
    </svg>
</template>
