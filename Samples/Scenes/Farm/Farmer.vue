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
                        end: 250,
                        handler({context, tween}) {
                            context.layers.rightarm.angle = tween.number(75, 100);
                            context.layers.rightarm.centerX = 853;
                            context.layers.rightarm.centerY = 815;

                            context.layers.rightshoulder.angle = 67;
                            context.layers.rightshoulder.centerX = 830;
                            context.layers.rightshoulder.centerY = 810;
                        },
                    },
                    {
                        start: 250,
                        end: 500,
                        handler({context, tween}) {
                            context.layers.rightarm.angle = tween.number(100, 75);
                            context.layers.rightarm.centerX = 853;
                            context.layers.rightarm.centerY = 815;

                            context.layers.rightshoulder.angle = 67;
                            context.layers.rightshoulder.centerX = 830;
                            context.layers.rightshoulder.centerY = 810;
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

            <layer :position="layers['leftleg']" :layer="layers['leftleg']" />
            <layer :position="layers['leftcalf']" :layer="layers['leftcalf']" />

            <layer :position="layers['rightleg']" :layer="layers['rightleg']" />
            <layer :position="layers['rightcalf']" :layer="layers['rightcalf']" />

        </g>
    </vector>
</template>
