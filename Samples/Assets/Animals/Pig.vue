<script>
    import CreateAsset from '../../../Factories/CreateAsset';
    import src from "../../Scenes/Farm/Farm.svg";

    export default CreateAsset({
        name: "pig",
        src,
        layers: ['pig'],
    });
</script>

<template>
    <vector  :style="{fill: defaultColor }" v-bind="$props" v-slot="">
        <layer v-for="(layer, i) in filteredLayers" :key="i" :layer="layer" />
    </vector>
</template>
