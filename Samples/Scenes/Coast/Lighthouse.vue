<script>
    export default {
        mixins: [],
        props: {},

        data() {
            return {};
        },

        methods: {},
        components: {}

    }
</script>

<template>
    <g :id="'lighthouse-' + _uid">
        <linearGradient id="lighthouse-gradient" x1="32.42" y1="61.42" x2="48.95" y2="61.42"
                        gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#d5ced4"/>
            <stop offset="0.28" stop-color="#b3b7c2"/>
            <stop offset="0.57" stop-color="#95a4b3"/>
            <stop offset="0.82" stop-color="#8398a9"/>
            <stop offset="1" stop-color="#7d94a6"/>
        </linearGradient>
        <linearGradient id="lighthouse-gradient-2" x1="52.31" y1="60.47" x2="87.32" y2="60.47"
                        xlink:href="#lighthouse-gradient"/>
        <linearGradient id="lighthouse-gradient-3" x1="90.59" y1="59.83" x2="107.61" y2="59.83"
                        xlink:href="#lighthouse-gradient"/>
        <polyline class="lighthouse-1"
                  points="31.51 105.19 29.33 42.35 25.06 40.08 62.52 16.78 60.62 6.98 67.02 0.98 72.92 6.38 72.06 16.38 112.24 37.9 108.43 40.35 111.02 104.1"/>
        <polyline class="lighthouse-2" points="71.11 17.19 63.48 17.19 47.95 40.08 52.85 104.37 90.99 104.37 89.91 38.72"/>
        <polyline class="lighthouse-3"
                  points="70.83 17.87 92.08 38.72 24.93 39.94 29.02 41.58 87.45 40.89 90.45 104.1 110.88 104.1 108.43 40.48 112.65 38.03 71.65 16.38"/>
        <polyline class="lighthouse-4" points="32.42 78.85 48.95 78.85 47.49 43.98 32.42 44.71"/>
        <polyline class="lighthouse-5" points="52.31 43.98 85.82 43.07 87.32 76.86 53.67 77.87"/>
        <polyline class="lighthouse-6" points="90.59 43.07 106.25 43.07 107.61 76.58 92.22 76.58"/>
        <polyline class="lighthouse-7"
                  points="0 421.74 0 407.87 9.43 401.38 22.89 129.16 17.16 117.72 5.04 112 2.81 106.28 31.88 104.46 44.59 112.09 43.14 420.94"/>
        <polyline class="lighthouse-8"
                  points="42.42 421.34 107.07 420.14 107.07 408.9 101.26 404.18 81.64 128.11 84.55 117.94 92.9 112.13 107.07 110.67 107.07 104.86 31.15 104.86 43.86 112.49"/>
        <polyline class="lighthouse-9"
                  points="106.7 420.14 173.18 418.49 170.64 407.41 163.74 403.06 126.68 120.81 132.86 112.45 143.39 109.91 142.67 104.46 106.7 104.86 106.7 110.67 92.54 112.13 84.18 117.94 81.28 128.11 91.45 271.27 94.72 320.96 100.89 404.18 106.7 408.9"/>
        <polyline class="lighthouse-10" points="62.39 361.28 79.82 361.28 77.28 331.13 71.11 326.41 62.39 331.86"/>
        <polyline class="lighthouse-10" points="59.85 273.01 74.74 273.01 74.74 245.4 67.29 241.04 59.85 244.68"/>
        <polyline class="lighthouse-11" points="58.03 190.19 71.11 190.19 71.11 168.76 64.57 164.04 58.03 167.67"/>
    </g>
</template>

<style scoped>
    .lighthouse-1 {
        fill: #7b3542;
    }

    .lighthouse-2 {
        fill: #5c2c36;
    }

    .lighthouse-3 {
        fill: #392530;
    }

    .lighthouse-4 {
        fill: url(#lighthouse-gradient);
    }

    .lighthouse-5 {
        fill: url(#lighthouse-gradient-2);
    }

    .lighthouse-6 {
        fill: url(#lighthouse-gradient-3);
    }

    .lighthouse-7 {
        fill: #ded6d5;
        stroke: #ded6d5;
    }

    .lighthouse-10, .lighthouse-11, .lighthouse-7 {
        stroke-miterlimit: 10;
    }

    .lighthouse-8 {
        fill: #cac6c7;
    }

    .lighthouse-9 {
        fill: #8d9195;
    }

    .lighthouse-10 {
        fill: #384349;
    }

    .lighthouse-10, .lighthouse-11 {
        stroke: #000;
    }

    .lighthouse-11 {
        fill: #354147;
    }
</style>
