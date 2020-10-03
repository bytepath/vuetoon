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
    <g id="buoy">
        <rect class="buoy-1" x="47.35" width="3.08" height="32.11"/>
        <polyline class="buoy-2" points="47.71 32.11 72.05 54.84 22.64 56.63"/>
        <path class="buoy-1"
              d="M89.36,95.83c0-11.9-6.77-41.42-17.31-41-25.56,1.06,0,0-16.17.1-18.1.12-7.8-3.67-33.24,1.69C12.81,58.71,0,84.54,0,95.83c0,28.18,20,51,44.68,51S89.36,124,89.36,95.83Z"/>
    </g>
</template>

<style scoped>
    .buoy-1 {
        fill: #d6d0d4;
    }

    .buoy-2 {
        fill: #252d25;
    }
</style>

