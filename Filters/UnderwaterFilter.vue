<script>
    export default {
        mixins:[],
        props: {
        },

        data(){ return {}; },
        computed:{},
        methods:{},
        components:{}
    }
</script>

<template>
    <filter id="noise" x='0%' y='0%' width='100%' height='100%'>
        <feTurbulence baseFrequency="0.02 0.03" result="NOISE" :numOctaves="1" id="turbulence" />
        <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="10"></feDisplacementMap>
    </filter>
</template>

