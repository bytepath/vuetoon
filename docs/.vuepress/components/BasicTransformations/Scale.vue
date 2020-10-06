<script>
    import Bytepath from "bytepath";

    export default {
        data() {
            return {
                sx: 2,
                sy: 1,
            };
        },

        mounted(){
            this.$forceUpdate();
        },

        components: {
            balloon: Bytepath.samples.assets.tinyBalloon.tinyBalloon,
        }
    }
</script>

<template>
    <div>
        <input type="range" v-model.number="sx" min="0" max="4">Scale X = {{ sx }}<br/>
        <input type="range" v-model.number="sy" min="0" max="4">Scale Y = {{ sy }}<br/>
        <balloon :sx="sx" :sy="sy"/>
    </div>
</template>
