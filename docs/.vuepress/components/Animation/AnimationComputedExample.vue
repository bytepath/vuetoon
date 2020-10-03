<script>
    import Bytepath from "bytepath";
    import AnimatedBalloon from "./AnimatedBalloon";

    export default {
        data() {
            return {
                balloonPos: new Bytepath.Position(),
                currentFrame: 0,
            };
        },

        components: {
            AnimatedBalloon,
        },
    };
</script>

<template>
    <div>
        <vector v-bind="$props">
            <animated-balloon :keyframe="currentFrame"/>
        </vector>
        <input type="range" v-model.number="currentFrame" min="0" max="2501">
        {{ currentFrame }}
        <span v-if="currentFrame == 2501" style="color:red;">REPEATING!</span>
    </div>
</template>
