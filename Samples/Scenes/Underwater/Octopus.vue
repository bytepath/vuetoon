<script>
    import CreateAsset from "../../../Factories/CreateAsset";
    import src from "./underwaterartboard.svg";

    export default CreateAsset({
        src,
        layer: "theart",
        lookAt: 'octopus',
        name: "octopus",
    });
</script>

<template>
    <vector :style="{fill: color}" v-bind="$props" >
        <g v-if="layers">
            <layer :position="layers['octopus']" :layer="layers['octopus']" />
        </g>
    </vector>
</template>
