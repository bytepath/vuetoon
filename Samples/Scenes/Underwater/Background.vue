<script>
    import CreateAsset from '../../../Factories/CreateAsset';
    import src from "./underwater.svg";

    export default CreateAsset({
        name: "underwater-background",
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
