<script>
    import Background from "./Background";

    export default {
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
    }
</script>

<template>
    <g :id="'underwater' + _uid">
        <background :crabs="crabs" />
        <slot />
    </g>
</template>
