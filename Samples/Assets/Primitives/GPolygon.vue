<script>
    import CalculatesTransformation from "../Mixins/CalculatesTransformation";
    export default {
        mixins: [
            CalculatesTransformation,
        ],
        props: {
            points: {
                type: String,
                default: "",
            },
        },

        data(){
            return {}
        },
        computed:{},
        methods:{},
        components:{}
    }
</script>

<template>
    <polygon v-bind="$props" :transform="transform"></polygon>
</template>

<style scoped>
</style>
