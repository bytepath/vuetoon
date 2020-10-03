<script>
    import Bytepath from "bytepath";

    export default Bytepath.CreateAsset({
        props: {
            keyframe: {
                type: Number,
                default: 0,
            },

            // If you use timers you should pass along the fps from the parent so that user's can slow things down
            // if performance is getting poor
            fps: {
                type: Number,
                default: 60,
            }
        },

        data() {
            return {};
        },
        computed: {},
        methods: {},
        components: {
            clock: Bytepath.timers.clock,
            bounce: Bytepath.animations.bounce,
            balloon: Bytepath.samples.assets.balloon,
        }
    });
</script>

<template>
    <g :transform="transform">
        <clock :fps="fps" v-slot="t" auto-play>
            <!-- bounce oscillates the entity along the x axis -->
            <bounce :keyframe="t.keyframe" :mx="1" :repeat="true" v-slot="bounce">
                <g>
                    <!-- balloon #1 runs its internal loop animation which moves to the right then drops out of the air -->
                    <balloon :keyframe="t.keyframe" anim="loop" :repeat="true"/>

                    <!-- balloon #2 runs the bounce animation -->
                    <balloon fill="blue" :matrix="bounce.matrix" :y="400"/>

                    <!-- #3 runs the spin animation which just rotates, but also changes the center y position
                        used to calculate the rotation causing a deflating animation -->
                    <balloon fill="orange" anim="spin" :repeat="true" :keyframe="t.keyframe"
                             :x="250"
                             :y="500"
                             :cy="Math.cos(t.keyframe / 500) * 500"/>

                    <!-- #4 is same as baloon 3 but modifies the rotation center X position -->
                    <balloon fill="green" anim="spin" :repeat="true" :keyframe="t.keyframe"
                             :x="500"
                             :y="250"
                             :cx="Math.sin(t.keyframe / 500) * 500"/>

                    <!-- #5 is same as baloon 3 but modifies the both center position variables -->
                    <balloon fill="yellow" anim="spin" :repeat="true" :keyframe="t.keyframe"
                             :x="500"
                             :y="250"
                             :cy="Math.cos(t.keyframe / 500) * 500"
                             :cx="Math.sin(t.keyframe / 500) * 500"/>
                </g>
            </bounce>
        </clock>
    </g>
</template>
