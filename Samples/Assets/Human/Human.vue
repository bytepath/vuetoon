<!-- Human.vue -->
<script>
    import CreateAsset from '../../../Factories/CreateAsset';
    import src from "./Human.svg";
    import dance from "./FirstAnimation";
    import punch from "./Punch";
    import kick from "./Kick";
    import flap from "./FaceDance";

    export default CreateAsset({
        name: "human",
        src,
        layers: [],
        animations() {
            return { dance, punch, kick, flap };
        },
    });
</script>

<template>
    <vector :style="{fill: defaultColor }" v-bind="$props" v-slot="">
        <layer v-for="(layer, i) in filteredLayers" :key="i" :position="layer" />
    </vector>
</template>
