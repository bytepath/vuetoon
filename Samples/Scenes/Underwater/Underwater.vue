<script>
    import Background from "./Background";
    import CreateAsset from "../../../Factories/CreateAsset";

    export default CreateAsset({
        props:{
            // Do we show the crabs and plants or no
            crabs: {
                type: Boolean,
                default: true,
            },
        },

        components: {
            Background,
        }
    })
</script>

<template>
    <vector :id="'underwater-'+_uid" v-bind="$props">
        <background />
        <slot />
    </vector>
</template>
