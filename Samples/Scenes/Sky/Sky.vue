<script>
    import Bytepath from 'bytepath';
    import Cloud from "./Cloud";

    export default Bytepath.CreateAsset({
        name: 'sky',

        props: {
            fps: {
                type: Number,
                default: 15
            }
        },
        components: {
            balloon: Bytepath.samples.assets.balloon,
            'clock': Bytepath.timers.clock,
            'bounce': Bytepath.animations.bounce,
            'pointy-background': Bytepath.samples.scenes.partials.pointyBackground,
            Cloud,
        }
    });
</script>

<template>
    <vector v-bind="$attrs">
        <pointy-background>
            <cloud  :x=" (keyframe /100) * (keyframe % 1610) " :y="400"/>
            <cloud  :x="-1000 + (keyframe >> 8) * (keyframe % 1610) " :y="900"/>
            <slot />
            <cloud  :x="-450 +  (keyframe % 1060)" :y="150"/>
            <cloud  :x="(-900 + (keyframe % 1440)) " :y="700"/>
        </pointy-background>
    </vector>
</template>
