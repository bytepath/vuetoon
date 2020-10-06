<script>
    import Bytepath from "bytepath";
    import src from "../../../../Samples/Assets/Human/Human.svg";

    export default Bytepath.CreateAsset({
        name: "single-layer",
        src,
        layers: ['leftleg', 'face'],
    });
</script>

<template>
    <vector :show-viewbox="true" height="100" width="100" :style="{fill: defaultColor }" v-bind="$props" >
        <layer v-for="(layer, i) in filteredLayers" :key="i" :position="layer" />
    </vector>
</template>
