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
        <clock :fps="60" v-slot="clock">
            <g v-if="layers">
                <rect fill="#E3DAA6" y="-900" width="1384" height="905" />

                <!-- Common use case: embed HTML text into SVG -->
                <foreignObject x="0" y="0" width="100%" height="900">
                    <html>
                    <body :style="[{'background-color': defaultColor }, {height: '900px' }]">
                    <slot />
                    </body>
                    </html>
                </foreignObject>

                <layer id="bbbb" :position="layers['background']" :layer="layers['background']" />
                <layer :position="layers['barn']" :layer="layers['barn']" />
                <cow  :keyframe="clock.keyframe" :repeat="true" align="topleft" :fit="true" :x="100" :y="650" width="300" height="300" />
                <cow  :keyframe="clock.keyframe" :repeat="true" align="topleft" :fit="true" :x="600" :y="650" width="300" height="300" />
                <farmer :keyframe="clock.keyframe" :repeat="true" :x="-200 + ((clock.keyframe % 6000) / 4)" :y="800" />
                <cow  :keyframe="clock.keyframe" :repeat="true" align="topleft" :fit="true" :x="350" :y="650" width="300" height="300" />
                <cow  :keyframe="clock.keyframe" :repeat="true" align="topleft" :fit="true" :x="850" :y="650" width="300" height="300" />

            </g>
        </clock>
    </vector>
</template>
