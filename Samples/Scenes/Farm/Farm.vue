<script>
    import CreateAsset from '../../../Factories/CreateAsset';
    import src from "./Farm.svg";
    import Farmer from "./Farmer";
    import Barn from "./Barn";
    import Cow from "./Cow";
    import ClockTimer from "../../../vue/Components/Timers/ClockTimer";

    export default CreateAsset({
        name: "farm-scene",
        src,
        components: {
            Farmer,
            Barn,
            Cow,
            clock: ClockTimer,
        }
    });
</script>

<template>
    <vector :id="'farm__' + _uid" :show-viewbox="false" :style="{fill: defaultColor }" v-bind="$props" v-slot="">
        <clock :fps="15" v-slot="clock">
            <g v-if="layers">
                <rect fill="#E3DAA6" y="-600" width="1384" height="605" />

                <layer :position="layers['background']" :layer="layers['background']" />
                <layer :position="layers['barn']" :layer="layers['barn']" />
                <farmer :keyframe="clock.keyframe" :repeat="true" :x="500" :y="800" />
                <cow  align="topleft" :fit="true" :x="200" :y="650" width="300" height="300" />
            </g>
        </clock>
    </vector>
</template>
