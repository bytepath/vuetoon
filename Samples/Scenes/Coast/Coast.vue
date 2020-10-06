<script>
    import Lighthouse from "./Lighthouse";
    import Rocks from "./Rocks";

    export default {
        components: {
            Lighthouse,
            Rocks,
        }
    }
</script>

<template>
    <g :id="'ocean' + _uid">
        <rocks />
        <g transform="translate(900 -75)">
            <lighthouse />
        </g>
    </g>
</template>
