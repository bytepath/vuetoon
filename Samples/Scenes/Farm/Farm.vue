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
    <vector :show-viewbox="false" :style="{fill: defaultColor }" v-bind="$props" v-slot="">
        <template v-if="layers">
            <layer :layer="layers['background']" />
        </template>
    </vector>
</template>
