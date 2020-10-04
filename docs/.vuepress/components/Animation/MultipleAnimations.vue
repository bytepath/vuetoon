<!-- MultipleAnimations.vue -->
<script>
    import Bytepath from "bytepath";
    let _k = Bytepath.CreateKeyframe;

    export default Bytepath.CreateAsset({

        components: {
            human: Bytepath.samples.assets.human,
        }
    });
</script>

<template>
    <svg width="100" viewBox="-160 177 917 1024" overflow="visible">
        <human :x="0" amim="default" :keyframe="keyframe" :repeat="true" />
        <human :x="2000" anim="dance" :keyframe="keyframe" :repeat="true" />
        <human :x="1000" anim="punch" :keyframe="keyframe" :repeat="true" />
        <human :x="3000" anim="kick" :keyframe="keyframe" :repeat="true" />
    </svg>
</template>
