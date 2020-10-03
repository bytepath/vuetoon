<!-- MultipleAnimations.vue -->
<script>
    import Bytepath from "bytepath";
    let _k = Bytepath.CreateKeyframe;

    export default Bytepath.CreateAsset({
        components: {
            animatedBalloon: Bytepath.samples.assets.animatedBalloon,
        }
    });
</script>

<template>
    <div>
        <animated-balloon anim="default" color="purple" :keyframe="keyframe" />
        <animated-balloon anim="babystep" color="red" :repeat="true" :keyframe="keyframe" />
        <animated-balloon anim="spin" :y="100" color="blue" :repeat="true" :keyframe="keyframe" />
        <animated-balloon anim="loopThenLand" color="green" :keyframe="keyframe" />
        <animated-balloon anim="changeColor" color="orange" :keyframe="keyframe" />
    </div>
</template>
