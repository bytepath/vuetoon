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
            octaves() {
                return this.keyframe % 10;
            }
        },
    }
</script>

<template>
    <filter>
        <feTurbulence baseFrequency="0.02 0.03" result="NOISE" :numOctaves="octaves" id="turbulence" />
        <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="10"></feDisplacementMap>
        <feColorMatrix type="matrix"  v-if="keyframe > 0" result="GREEN" values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
    </filter>
</template>
