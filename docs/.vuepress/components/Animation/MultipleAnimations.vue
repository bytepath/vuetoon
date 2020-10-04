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
        <human :x="0"    color="red"    :keyframe="keyframe" :repeat="true" anim="chicken" />
        <human :x="1500" color="aqua"   :keyframe="keyframe" :repeat="true" anim="dance" />
        <human :x="3000" color="green"  :keyframe="keyframe" :repeat="true" anim="punch" />
        <human :x="4500" color="orange" :keyframe="keyframe" :repeat="true" anim="kick"  />
    </svg>
</template>
