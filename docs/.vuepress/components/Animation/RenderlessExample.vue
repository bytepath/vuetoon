<!-- RenderlessExample.vue -->
<script>
    import Bytepath from "bytepath";

    export default Bytepath.CreateAsset({
        props:{
            keyframe: {
                type: Number,
                default: 0
            }
        },

        components: {
            balloon: Bytepath.samples.assets.balloon,
            human: Bytepath.samples.assets.human,
            doABarrelRoll: Bytepath.samples.animations.doABarrelRoll,
        },
    });
</script>

<template>
    <vector v-bind="$props">
        <human :keyframe="keyframe" :sx="0.1" :sy="0.1" :x="-350" :y="-290" v-bind="barrelroll" />
        <balloon v-bind="barrelroll"/>

        <do-a-barrel-roll :keyframe="keyframe" v-slot="barrelroll">
            <balloon color="green" v-bind="barrelroll"/>
        </do-a-barrel-roll>

        <do-a-barrel-roll :keyframe="keyframe" v-slot="barrelroll">
            <human :keyframe="keyframe" :sx="0.1" :sy="0.1" :x="-100" :y="170" v-bind="barrelroll" color="orange" />
        </do-a-barrel-roll>
    </vector>
</template>
