<script>
    import Bytepath from "bytepath";

    export default {
        data() {
            return { x: 50, y: 0, angle: 0 };
        },

        components: {
            balloon: Bytepath.samples.assets.balloon,
            human: Bytepath.samples.assets.human,
        }
    }
</script>

<template>
    <div>
        <input type="range" v-model.number="x" min="0" max="100">X = {{ x }}<br/>
        <input type="range" v-model.number="y" min="0" max="50">Y = {{ y }}<br/>
        <input type="range" v-model.number="angle" min="0" max="360">Angle = {{ angle }}<br/>

        <!-- Here human and balloon are two distinct asets -->
        <human :x="0"  />
        <balloon :x="25"  />

        <!-- Here balloon and human have been combined to make a single asset -->
        <balloon :x="x" :y="y" :a="angle" v-slot="balloon">
            <human :position="balloon.position" :sx="2" :sy="2" aspect="xMidYMax meet"/>
        </balloon>
    </div>
</template>
