<script>
    import CreateAsset from '../../../Factories/CreateAsset';
    import src from "./Farm.svg";

    export default CreateAsset({
        name: "farmer",
        src,
        layer: 'farmer',

        animations() {
            return {
                default: [
                    {
                        start: 0,
                        end: 500,
                        handler({context, tween}) {
                            context.layers.rightarm.angle = tween.number(75, 100);
                            context.layers.rightarm.centerX = 853;
                            context.layers.rightarm.centerY = 815;

                            context.layers.rightshoulder.angle = 67;
                            context.layers.rightshoulder.centerX = 830;
                            context.layers.rightshoulder.centerY = 810;

                            context.layers.leftshoulder.angle = tween.number(0, 181);
                            context.layers.leftshoulder.centerX = 805;
                            context.layers.leftshoulder.centerY = 810;


                            context.layers.leftleg.angle = 360 - tween.number(0, 80);
                            context.layers.leftleg.centerX = 810;
                            context.layers.leftleg.centerY = 850;

                            context.layers.leftcalf.angle = tween.number(25, 90);
                            context.layers.leftcalf.centerX = 810;
                            context.layers.leftcalf.centerY = 885;


                            context.layers.rightleg.angle = tween.number(0, 80);
                            context.layers.rightleg.centerX = 815;
                            context.layers.rightleg.centerY = 865;

                            context.layers.rightcalf.angle = 360 - tween.number(270, 360);
                            context.layers.rightcalf.centerX = 825;
                            context.layers.rightcalf.centerY = 885;
                        },
                    },
                    {
                        start: 500,
                        end: 1000,
                        handler({context, tween}) {
                            context.layers.rightarm.angle = tween.number(100, 75);
                            context.layers.rightarm.centerX = 853;
                            context.layers.rightarm.centerY = 815;

                            context.layers.rightshoulder.angle = 67;
                            context.layers.rightshoulder.centerX = 830;
                            context.layers.rightshoulder.centerY = 810;


                            context.layers.rightleg.angle = tween.number(280, 360);
                            context.layers.rightleg.centerX = 815;
                            context.layers.rightleg.centerY = 865;

                            context.layers.rightcalf.angle = tween.number(0, 40);
                            context.layers.rightcalf.centerX = 825;
                            context.layers.rightcalf.centerY = 885;


                            context.layers.leftleg.angle = 360 - tween.number(280, 360);
                            context.layers.leftleg.centerX = 810;
                            context.layers.leftleg.centerY = 850;

                            context.layers.leftcalf.angle = tween.number(90, 25);
                            context.layers.leftcalf.centerX = 810;
                            context.layers.leftcalf.centerY = 885;
                        },
                    },
                ],
            };
        },
    });
</script>

<template>
    <vector :show-viewbox="true" :style="{fill: defaultColor }" v-bind="$props" v-slot="">
        <g v-if="layers">

            <layer :position="layers['head3']" :layer="layers['head3']" />
            <layer :position="layers['body2']" :layer="layers['body2']" />
            <layer :position="layers['rightshoulder']" :layer="layers['rightshoulder']">
                <layer :position="layers['rightarm']" :layer="layers['rightarm']"/>
            </layer>

            <layer :position="layers['leftshoulder']" :layer="layers['leftshoulder']">
                <layer :position="layers['leftarm']" :layer="layers['leftarm']"/>
            </layer>

            <layer :position="layers['leftleg']" :layer="layers['leftleg']" >
                <layer :position="layers['leftcalf']" :layer="layers['leftcalf']" />
            </layer>

            <layer :position="layers['rightleg']" :layer="layers['rightleg']" >
                <layer :position="layers['rightcalf']" :layer="layers['rightcalf']" />
            </layer>

        </g>
    </vector>
</template>
