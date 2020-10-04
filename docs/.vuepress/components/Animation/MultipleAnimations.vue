<!-- MultipleAnimations.vue -->
<script>
    import Bytepath from "bytepath";

    export default Bytepath.CreateAsset({
        components: {
            human: Bytepath.samples.assets.human,
        }
    });
</script>

<template>
    <svg width="100" viewBox="-160 177 917 1024" overflow="visible">
        <human anim="flap"  color="red"  :keyframe="keyframe" :repeat="true"/>
        <human anim="dance" color="aqua" :keyframe="keyframe" :repeat="true" :x="1500"/>
        <human anim="punch" color="blue" :keyframe="keyframe" :repeat="true" :x="3000"/>
        <human anim="kick"  color="plum" :keyframe="keyframe" :repeat="true" :x="4500"/>
    </svg>
</template>
