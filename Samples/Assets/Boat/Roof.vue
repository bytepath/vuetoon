<script>
    export default {
        mixins: [],
        props: {
        },

        data(){
            return {};
        },

        methods:{},
        components:{}

    }
</script>

<template>
    <g id="boat-roof">
        <polyline id="boat-roof-2" data-name="boat-roof" class="roof-1"
                  points="0 291.77 0 184.44 57.68 183.15 68.03 0 67.22 182.94 145.94 181.17 159.57 190.43 168.1 207.66 198.26 206.74 203.7 108.43 205.61 206.52 274.54 204.42 273.08 286.45"/>
        <polygon id="boat-roof2" class="roof-2"
                 points="276.71 204.42 288.7 204.42 288.7 286.45 275.26 286.45 276.71 204.42"/>
        <ellipse class="roof-2" cx="139.26" cy="236.2" rx="33.39" ry="55.57"/>

        <linearGradient id="roof-gradient" x1="137.48" y1="277.97" x2="135.62" y2="13.21"
                        gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#a8a3b5"/>
            <stop offset="0.22" stop-color="#b0aaba"/>
            <stop offset="0.58" stop-color="#c6bfc8"/>
            <stop offset="1" stop-color="#eadfdf"/>
        </linearGradient>
    </g>
</template>

<style scoped>
    .roof-1 {
    fill: url(#roof-gradient);
    }

    .roof-2 {
        fill: #d6d0d4;
    }
</style>

