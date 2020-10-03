<script>
    import FirstWave from "./FirstWave";
    import SecondWave from "./SecondWave";
    import GeoShape from "./GeoShape";
    import LinearScroll from "../Bytepath/premade/LinearScroll";
    import AnimationEntity from "../Bytepath/Mixins/AnimationEntity";
    import ClockTimer from "../Bytepath/Components/Timers/ClockTimer";

    export default {
        mixins: [AnimationEntity],
        props: {
            scroll:{
                type: Number,
                default: 0,
            },
        },

        data() {
            this.timer._p('explosion');
            return {};
        },

        computed:{},

        methods:{
            shapeClicked() {
                alert("Clicked the shape");
            }
        },
        components:{
            ClockTimer,
            FirstWave,
            SecondWave,
            GeoShape,
            LinearScroll,
        }
    }
</script>

<template>
    <linear-scroll :keyframe="keyframe" :sy="200" :mx="0" :my="-0.5">
        <first-wave :keyframe="keyframe" name="first" v-slot="first">
            <clock-timer v-slot="clock" >
                <geo-shape :keyframe="clock.keyframe" :timer="clock.timer" cat="1" :index="1" :mx="4" :my="2" id="box1" class="cls-7" points="170.33 236.23 170.33 299.48 85.17 267.85 0 236.23 85.17 204.6 170.07 172.97 170.33 236.23" :matrix="first.matrix"/>
            </clock-timer>

            <clock-timer v-slot="clock">
                <geo-shape :keyframe="clock.keyframe" :timer="clock.timer" cat="2" :index="2" :mx="4" :my="0.667" id="box2" class="cls-6" points="0.07 298.42 0.07 236.15 85.23 267.29 170.33 299.48 85.23 329.55 0.07 360.68 0.07 298.42" :matrix="first.matrix"/>
            </clock-timer>

            <clock-timer v-slot="clock">
                <geo-shape :keyframe="clock.keyframe" :timer="clock.timer" cat="3" :index="3" :mx="4" :my="0.667" class="cls-1" points="170.4 470.92 0.07 533.65 0.07 360.68 170.4 298.27 170.4 470.92" :matrix="first.matrix" />
            </clock-timer>

            <clock-timer v-slot="clock">
                <geo-shape :keyframe="clock.keyframe" :timer="clock.timer" cat="4" :index="4" :mx="2" :my="0.5" id="box4" class="cls-2" points="170.33 299.48 340.4 363.76 341.36 237.61 170.07 172.97 170.33 299.48" :matrix="first.matrix"/>
            </clock-timer>

            <clock-timer v-slot="clock">
                <geo-shape :keyframe="clock.keyframe" :timer="clock.timer" cat="5" :index="5" :mx="0.5" :my="0.5" class="cls-3" points="170.33 471.03 340.4 533.57 340.4 361.54 170.33 299.48 170.33 471.03" :matrix="first.matrix"/>
            </clock-timer>

            <clock-timer v-slot="clock">
                <geo-shape :keyframe="clock.keyframe" :timer="clock.timer" cat="6" :index="6" :mx="0.125" :my="0.7" class="cls-6" points="340.35 299.53 340.35 237.27 426.04 268.4 510.69 299.2 426.04 330.66 340.35 361.79 340.35 299.53" :matrix="first.matrix"/>
            </clock-timer>

            <clock-timer v-slot="clock">
                <geo-shape :keyframe="clock.keyframe" :timer="clock.timer" cat="7" :index="7" :mx="0.125" :my="0.8" id="box7" class="cls-1" points="510.3 471.91 340.35 533.57 340.35 361.6 510.69 299.2 510.3 471.91" :matrix="first.matrix"/>
            </clock-timer>

            <clock-timer v-slot="clock">
                <geo-shape :keyframe="clock.keyframe" :timer="clock.timer" cat="8" :index="8" :mx="0.125" :my="0.5" id="box8" class="cls-6" points="510.12 62.96 510.12 0.7 595.8 31.83 679.66 63.25 595.8 94.09 510.12 125.23 510.12 62.96" :matrix="first.matrix" />
            </clock-timer>

            <clock-timer v-slot="clock">
                <geo-shape :keyframe="clock.keyframe" :timer="clock.timer" cat="11" :index="9" :mx="0.125"  :my="0.7" id="box9" class="cls-3" points="680.17 235.38 510.69 299.2 510.12 125.23 679.66 63.25 680.17 235.38" :matrix="first.matrix"/>
            </clock-timer>

            <clock-timer v-slot="clock">
                <geo-shape :keyframe="clock.keyframe" :timer="clock.timer" cat="10" :index="10" :mx="0.125" :my="0.5" id="box10" class="cls-6" points="510.3 408.21 510.58 346.05 596.71 377.08 680.35 407.74 596.71 439.35 510.3 471.91 510.3 408.21" :matrix="first.matrix"/>
            </clock-timer>
        </first-wave>

        <second-wave :keyframe="keyframe" name="second" v-slot="second">
            <clock-timer v-slot="clock">
            <geo-shape :keyframe="clock.keyframe" :timer="clock.timer" cat="11" :index="11" :mx="0.667" :my="0.7" class="cls-2" points="850.5 172.65 680.17 235.38 679.66 63.25 850.5 0 850.5 172.65" :matrix="second.matrix"/>
            </clock-timer>

            <clock-timer v-slot="clock">
            <geo-shape :keyframe="clock.keyframe" :timer="clock.timer" cat="12" :index="12" :mx="0.667" :my="0.1" id="box12" class="cls-7" points="850.5 235.24 850.5 297.5 765.33 266.37 680.17 235.38 765.33 204.11 850.5 172.5 850.5 235.24" :matrix="second.matrix"/>
            </clock-timer>

            <clock-timer v-slot="clock">
            <geo-shape :keyframe="clock.keyframe" :timer="clock.timer" cat="13" :index="13" :mx="0.667" :my="0.1" id="box13" class="cls-5" points="680.17 407.74 850.5 470.2 850.5 297.5 680.17 235.38 680.17 407.74" :matrix="second.matrix"/>
            </clock-timer>

            <clock-timer v-slot="clock">
            <geo-shape :keyframe="clock.keyframe" :timer="clock.timer" cat="14" :index="14" :mx="0.667" :my="0.1" class="cls-7" points="1022.31 172.97 1022.31 235.1 936.26 204.11 850.5 172.5 936.26 141.84 1022.31 110.71 1022.31 172.97" :matrix="second.matrix"/>
            </clock-timer>

            <clock-timer v-slot="clock">
            <geo-shape :keyframe="clock.keyframe" :timer="clock.timer" cat="15" :index="17" :mx="0.667" :my="0.1" class="cls-6" points="850.5 172.97 850.5 406.9 1022.72 234.98" :matrix="second.matrix"/>
            </clock-timer>

            <clock-timer v-slot="clock">
            <geo-shape cat="16" :keyframe="clock.keyframe" :timer="clock.timer" :index="16" :mx="0.667" :my="0.1" class="cls-1" points="1020.29 407.7 850.5 470.23 849.49 297.45 1022.31 234.98 1020.29 407.7" :matrix="second.matrix"/>
            </clock-timer>

            <clock-timer v-slot="clock">
            <geo-shape :keyframe="clock.keyframe" :timer="clock.timer" cat="17" :index="17" :mx="0.667" :my="0.1" class="cls-5" points="1022.31 172.97 1022.31 235.1 1108.72 204.11 1192.64 171.97 1108.72 141.84 1022.31 110.71 1022.31 172.97" :matrix="second.matrix"/>
            </clock-timer>

            <clock-timer v-slot="clock">
                <geo-shape :keyframe="clock.keyframe" :timer="clock.timer" cat="18" :index="18" :mx="0.667" :my="0.1" class="cls-3" points="1192.64 344.61 1020.29 407.82 1022.31 234.38 1192.64 171.97 1192.64 344.61" :matrix="second.matrix"/>
            </clock-timer>

            <clock-timer v-slot="clock">
                <geo-shape :keyframe="clock.keyframe" :timer="clock.timer" cat="19" :index="19" :mx="0.667" :my="0.1" class="cls-6" points="1362.98 171.97 1362.98 109.7 1277.81 140.84 1192.64 171.97 1277.81 203.1 1362.98 234.38 1362.98 171.97" :matrix="second.matrix"/>
            </clock-timer>

            <clock-timer v-slot="clock">
                <geo-shape :keyframe="clock.keyframe" :timer="clock.timer" cat="20" :index="20" :mx="0.667" :my="0.1" class="cls-4" points="1192.64 344.61 1362.98 407.35 1362.98 234.38 1192.64 171.97 1192.64 344.61" :matrix="second.matrix"/>
            </clock-timer>
        </second-wave>
    </linear-scroll>
</template>

<style scoped>
    .cls-1 {fill: #9bd2ca;}
    .cls-2 {fill: #de887d;}
    .cls-3 {fill: #313b47;}
    .cls-4 {fill: #ffe4b8;}
    .cls-5 {fill: #96a9d1;}
    .cls-6 {fill: #c9c3c3;}
    .cls-7 {fill: #e0d8d8;}
</style>
