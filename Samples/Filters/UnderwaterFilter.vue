<script>

    export default {
        props: {
            keyframe: {
                type: Number,
                default: 0,
            }
        },

        computed: {
            octaves() {
                return this.keyframe % 10;
            }
        }
    }
</script>

<template>
    <filter width='100%' height='100%'>
        <feTurbulence baseFrequency="0.02 0.03" result="NOISE" :numOctaves="octaves" id="turbulence" />
        <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="20"></feDisplacementMap>
    </filter>
</template>

