<script>
    /* eslint-disable */
    export default {
        props: {
            keyframe: {
                type: Number,
                default: 0,
            },
        },

        computed: {
            scale() {
                return (this.keyframe < 1000) ? (this.keyframe / 20) : 50;
            }
        },
    }
</script>

<template>
    <filter>
        <feTurbulence baseFrequency="0.02 0.03" result="NOISE" :numOctaves="10" id="turbulence" />
        <feDisplacementMap in="SourceGraphic" in2="NOISE" :scale="scale"></feDisplacementMap>
        <feColorMatrix type="matrix"  v-if="keyframe > 0" result="GREEN" values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
    </filter>
</template>
