<script>
    import Bytepath from "bytepath";

    export default {
        data() {
            return { x: 1, y: 1 };
        },

        components: {
            balloon: Bytepath.samples.assets.balloon,
        }
    }
</script>

<template>
    <div>
        <input type="range" v-model.number="x" min="0" max="100" />X = {{ x }}<br/>
        <input type="range" v-model.number="y" min="0" max="100" />Y = {{ y }}<br/>
        <balloon :x="x" :y="y"/>
    </div>
</template>
