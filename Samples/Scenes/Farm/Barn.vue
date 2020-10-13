<script>
    import CreateAsset from '../../../Factories/CreateAsset';
    import src from "./Farm.svg";

    export default CreateAsset({
        name: "barn",
        src,
        layer: ['barn'],
    });
</script>

<template>
    <vector :show-viewbox="true" :style="{fill: defaultColor }" v-bind="$props" v-slot="">
        <g>
            <layer v-for="(layer, i) in filteredLayers" :key="i" :layer="layer" />
        </g>
    </vector>
</template>
