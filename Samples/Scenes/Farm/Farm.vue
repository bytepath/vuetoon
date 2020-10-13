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
        <clock :fps="30" v-slot="clock">
            <g v-if="layers">
                <rect fill="#E3DAA6" y="-900" width="1384" height="905" />


                <layer :position="layers['background']" :layer="layers['background']" />
                <layer :position="layers['barn']" :layer="layers['barn']" />
                <cow  :keyframe="clock.keyframe" :repeat="true" align="topleft" :fit="true" :x="100" :y="650" width="300" height="300" />
                <cow  :keyframe="clock.keyframe" :repeat="true" align="topleft" :fit="true" :x="600" :y="650" width="300" height="300" />
                <farmer :keyframe="clock.keyframe" :repeat="true" :x="-200 + ((clock.keyframe % 6000) / 4)" :y="800" />
                <cow  :keyframe="clock.keyframe" :repeat="true" align="topleft" :fit="true" :x="350" :y="650" width="300" height="300" />
                <cow  :keyframe="clock.keyframe" :repeat="true" align="topleft" :fit="true" :x="850" :y="650" width="300" height="300" />
                <!-- Common use case: embed HTML text into SVG -->
                <foreignObject x="150" y="225" width="1000" height="570">
                    <html>
                        <body>
                        <div xmlns="http://www.w3.org/1999/xhtml" style="position:relative;
         width:1000px;height:570px;overflow:hidden;font-family:Arial;
         font-weight:400;font-size:72px;line-height:100%;">
                            Lorem ipsum dolor sit amet, consectetur adipiscing egplit, sed do eiusmod
                            tempor incididunt ut labore
                        </div>
                        </body>
                    </html>
                </foreignObject>
            </g>
        </clock>
    </vector>
</template>
