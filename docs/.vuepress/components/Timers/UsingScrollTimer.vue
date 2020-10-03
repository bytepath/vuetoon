<script>
    import Bytepath from "bytepath";

    export default {
        components: {
            scroll: Bytepath.timers.scroll
        }
    }
</script>

<template>
    <div>
        <scroll v-slot="{ keyframe }">
            Current Keyframe: {{ keyframe }}
        </scroll>
    </div>
</template>
