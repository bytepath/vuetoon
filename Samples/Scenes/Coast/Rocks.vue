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
    <g :id="'rocks' + _uid">
        <linearGradient id="rocks-gradient" x1="179.85" y1="464.44" x2="1009.42" y2="464.44"
                        gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#948d9d"/>
            <stop offset="0.2" stop-color="#8e8797"/>
            <stop offset="0.49" stop-color="#7e7784"/>
            <stop offset="0.82" stop-color="#645d67"/>
            <stop offset="1" stop-color="#544c54"/>
        </linearGradient>
        <linearGradient id="rocks-gradient-2" x1="506" y1="434.61" x2="1366" y2="434.61"
                        gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#958c9d"/>
            <stop offset="0.41" stop-color="#938a9b"/>
            <stop offset="0.59" stop-color="#8d8494"/>
            <stop offset="0.73" stop-color="#817987"/>
            <stop offset="0.84" stop-color="#716975"/>
            <stop offset="0.94" stop-color="#5c555e"/>
            <stop offset="1" stop-color="#4c454c"/>
        </linearGradient>
        <linearGradient id="rocks-gradient-3" x1="271.41" y1="465.26" x2="1074.28" y2="465.26"
                        gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#938c9c"/>
            <stop offset="0.37" stop-color="#918a9a"/>
            <stop offset="0.57" stop-color="#8a8392"/>
            <stop offset="0.73" stop-color="#7e7784"/>
            <stop offset="0.86" stop-color="#6d6671"/>
            <stop offset="0.98" stop-color="#585058"/>
            <stop offset="1" stop-color="#544c54"/>
        </linearGradient>
        <linearGradient id="rocks-gradient-4" x1="682.54" y1="465.75" x2="1366" y2="465.75"
                        gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#958c9d"/>
            <stop offset="0.4" stop-color="#938a9b"/>
            <stop offset="0.58" stop-color="#8c8493"/>
            <stop offset="0.72" stop-color="#817887"/>
            <stop offset="0.84" stop-color="#706874"/>
            <stop offset="0.94" stop-color="#5b545d"/>
            <stop offset="1" stop-color="#4c454c"/>
        </linearGradient>
        <linearGradient id="rocks-gradient-5" x1="670.26" y1="505.12" x2="699.62" y2="759.6"
                        gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#7d96ae"/>
            <stop offset="0.22" stop-color="#668096"/>
            <stop offset="0.53" stop-color="#496678"/>
            <stop offset="0.8" stop-color="#385666"/>
            <stop offset="1" stop-color="#325060"/>
        </linearGradient>
        <path class="rocks-1"
              d="M807.59,359.42h73.56s60.48,24.64,69.47,24.58,106.25,111.91,106.25,111.91l4.09,16.35-526.35,18.8-219,38.41L231.39,558,300,500,313.93,460l134.86-22.07,33.51-2.45,27-36L553.41,384l110.33-14.77"/>
        <polyline class="rocks-2"
                  points="1366 348.8 1096.1 348.8 1074.04 340.62 852.54 344.71 823.94 359.42 792.06 374.13 747.11 413.36 651.49 443.6 608.17 494.28 506 528.6 1366 518.53"/>
        <polyline class="rocks-3"
                  points="971 414.66 908.12 406.01 850.91 399.47 776.53 407.06 731.58 414.66 604.9 451.78 525.62 491.82 321.29 531.06 1124.16 524.52 1124.16 426.44 971 414.66"/>
        <polyline class="rocks-4"
                  points="1366 400.44 1013.55 403.56 957.16 418.27 891.77 450.96 814.13 486.1 682.54 531.06 1366 518.53"/>
        <polyline class="rocks-5" points="1133.54 497.55 3.98 511.44 3.98 768 1366 768 1366 497.55"/>
    </g>
</template>

<style scoped>
    .rocks-1 {
        fill: url(#rocks-gradient);
    }

    .rocks-2 {
        fill: url(#rocks-gradient-2);
    }

    .rocks-3 {
        fill: url(#rocks-gradient-3);
    }

    .rocks-4 {
        fill: url(#rocks-gradient-4);
    }

    .rocks-5 {
        fill: url(#rocks-gradient-5);
    }
</style>
