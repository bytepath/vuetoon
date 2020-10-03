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
    <g :id="'cabin' + _uid">
        <polygon class="cabin-1"
                 points="163.38 19.28 436.91 13.83 394.24 231.75 112.16 263.38 137.77 138.61 163.38 19.28"/>
        <path class="cabin-2"
              d="M170.28,158.74H221.5c6.9-7.63,8.72-14.53,8.72-14.53l15.26-81-1.82-7.27-1.82-3.27H191.71l-3.63,1.45L183,58.85l-3.27,13.8-13.81,72.29Z"/>
        <path class="cabin-2"
              d="M252.47,158.74h51.22c6.9-7.63,8.71-14.53,8.71-14.53l15.26-81-1.81-7.27L324,52.67H273.9l-3.63,1.45-5.09,4.73-3.27,13.8-13.8,72.29Z"/>
        <path class="cabin-2"
              d="M334.65,157.29h51.22c6.9-7.63,8.72-14.53,8.72-14.53l15.26-81L408,54.49l-1.82-3.27H356.09l-3.64,1.45-5.08,4.72L344.1,71.2l-13.81,72.28Z"/>
        <polyline class="cabin-3" points="0 22.43 163.38 19.28 136.79 143.39 112.16 263.38 0 269.53"/>
        <polyline class="cabin-2"
                  points="73.48 55.94 87.64 52.67 106.71 54.31 112.16 59.76 112.16 68.47 92.82 149.93 86.55 158.74 77.29 161.81 69.66 158.74 63.12 154.75 63.12 139.03 63.12 104.25 63.12 75.01 68.03 61.39 63.12 64.66"/>
        <polyline class="cabin-2"
                  points="0 149.93 0.71 135.84 4.28 64.66 8.09 55.4 14.63 55.4 26.07 52.67 35.34 57.58 38.6 66.84 35.88 93.61 35.88 138.61 35.88 149.93 29.89 158.74 22.26 162.19 8.09 162.19"/>
        <polyline class="cabin-4" points="63.12 127.11 106.19 93.61 108.6 83.48 63.12 119.15"/>
        <polyline class="cabin-5" points="163.38 19.28 453.98 13.83 453.98 0 165.92 3.63 0 7.43 0 22.43"/>

        <linearGradient id="cabin-gradient" x1="263.29" y1="44.61" x2="277.77" y2="165.67"
                    gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#d5ced4"/>
            <stop offset="0.46" stop-color="#d3cdd3"/>
            <stop offset="0.63" stop-color="#ccc8cf"/>
            <stop offset="0.75" stop-color="#c1c0c9"/>
            <stop offset="0.84" stop-color="#b0b5c0"/>
            <stop offset="0.92" stop-color="#9aa7b5"/>
            <stop offset="0.99" stop-color="#7f96a7"/>
            <stop offset="1" stop-color="#7d94a6"/>
        </linearGradient>
        <linearGradient id="cabin-gradient-2" x1="78.37" y1="35.64" x2="82.74" y2="178.65"
                        gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#beb5a8"/>
            <stop offset="0.46" stop-color="#bcb4a7"/>
            <stop offset="0.63" stop-color="#b5b0a5"/>
            <stop offset="0.74" stop-color="#aaa8a2"/>
            <stop offset="0.84" stop-color="#999d9d"/>
            <stop offset="0.92" stop-color="#839096"/>
            <stop offset="0.99" stop-color="#687f8e"/>
            <stop offset="1" stop-color="#657d8d"/>
        </linearGradient>
    </g>
</template>

<style>
    .cabin-1{fill:url(#cabin-gradient);}
    .cabin-2{fill:#7fa2b2;}
    .cabin-3{fill:url(#cabin-gradient-2);}
    .cabin-4{
        fill:#d8cbcb;
        stroke:#fff;
        stroke-miterlimit:10;
    }
    .cabin-5{fill:#d6d0d4;}
</style>
