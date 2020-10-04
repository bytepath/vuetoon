<script>
    import CreateAsset from '../../../Factories/CreateAsset';
    import src from "./Farm.svg";

    export default CreateAsset({
        name: "farm-scene",
        src,
        layers: [],
    });
</script>

<template>
    <vector  :style="{fill: defaultColor }" v-bind="$attrs" v-slot="">
        <layer v-for="(layer, i) in filteredLayers" :key="i" :position="layer" />
    </vector>
</template>
