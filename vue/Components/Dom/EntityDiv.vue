<script>
    import CalculatesTransformation from "../../Mixins/CalculatesTransformation";

    export default {
        mixins:[CalculatesTransformation],
        props: {
        },

        data(){ return {}; },
        computed:{},
        methods:{},
        components:{}
    }
</script>

<template>
    <div :style="{transform: this.transform }">
        THIS IS A NORMAL DIV THAT IS NOT AN SVG
        {{ transform.toString() }}
        <slot></slot>
    </div>
</template>

