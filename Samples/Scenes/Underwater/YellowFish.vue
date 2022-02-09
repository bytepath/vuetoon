<script>
    import CreateAsset from "../../../Factories/CreateAsset";
    import src from "./underwaterartboard.svg";

    export default CreateAsset({
        src,
        layer: "theart",
        lookAt: 'yellowfish',
        name: "yellowfish",
    });
</script>

<template>
    <vector :style="{fill: color}" v-bind="$props" >
        <g v-if="layers">
            <layer :position="layers['yellowfish']" :layer="layers['yellowfish']" />
        </g>
    </vector>
</template>
