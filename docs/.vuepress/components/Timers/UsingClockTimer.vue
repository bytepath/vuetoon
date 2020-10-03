<script>
    import Bytepath from "bytepath";

    export default {
        data() {
            return {
                fps: 60,
            };
        },

        components: {
            clock: Bytepath.timers.clock
        }
    }
</script>

<template>
    <clock :fps="fps" v-slot="{ keyframe }">
    <div>
        Current Keyframe: {{ keyframe }}<br/>
        <input type="range" v-model.number="fps" min="0" max="60" > {{ fps }} FPS
    </div>
    </clock>
</template>
