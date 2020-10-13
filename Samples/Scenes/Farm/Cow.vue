<script>
    import CreateAsset from '../../../Factories/CreateAsset';
    import src from "./Farm.svg";

    export default CreateAsset({
        name: "cow",
        src,
        layer: 'cow',

        animations() {
            return {
                default: [
                    {
                        start: 0,
                        end: 500,
                        handler({context, tween}) {
                            context.layers.head2.x = tween.number(-5, 30);
                            context.layers.head2.y = tween.number(50, -5);
                            context.layers.body1.y = tween.number(20, -5);

                        },
                    },
                    {
                        start: 500,
                        end: 1000,
                        handler({context, tween}) {
                            context.layers.head2.x = tween.number(30, -5);
                            context.layers.head2.y = tween.number(-5, 20);
                        },
                    },
                ],
            };
        },
    });
</script>

<template>
    <vector width="200" height="200" :show-viewbox="true"  :style="{fill: defaultColor }" v-bind="$props" v-slot="">
        <g>
            <layer v-for="(layer, i) in filteredLayers" :key="i" :position="layer" :layer="layer" />
        </g>
    </vector>
</template>
