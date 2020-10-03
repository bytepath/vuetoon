<script>
    export default {}
</script>

<template>
    <filter id="noise" x='0%' y='0%' width='100%' height='100%'>
        <feTurbulence baseFrequency="0.02 0.03" result="NOISE" :numOctaves="10" id="turbulence" />
        <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="20"></feDisplacementMap>
    </filter>
</template>

