<script>
    import Bytepath from 'bytepath';
    import svg from "./underwaterartboard.svg";

    export default Bytepath.CreateAsset({
        src: svg,
        name: "bigfish",

        components:{},
    });
</script>

<template>
    <vector  :style="{fill: color}" v-bind="$props">
    </vector>
</template>
