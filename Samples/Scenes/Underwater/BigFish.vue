<script>
    import CreateAsset from "../../../Factories/CreateAsset";
    import src from "./underwaterartboard.svg";

    export default CreateAsset({
        src,
        layer: "theart",
        lookAt: 'bigfish',
        name: "bigfish",
    });
</script>

<template>
    <vector :style="{fill: color}" v-bind="$props" >
        <g v-if="layers">
            <layer :position="layers[lookAt]" :layer="layers[lookAt]" />
        </g>
    </vector>
</template>
