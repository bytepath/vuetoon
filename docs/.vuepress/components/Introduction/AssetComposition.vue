<script>
    import Bytepath from "bytepath";

    export default {
        data() {
            return {x: 50, y: 0, angle: 0};
        },

        components: {
            balloon: Bytepath.samples.assets.balloon,
            human: Bytepath.samples.assets.human,
            vector: Bytepath.graphics.vector,
        }
    }
</script>

<template>
    <div>
        <input type="range" v-model.number="x" min="0" max="100">X = {{ x }}<br/>
        <input type="range" v-model.number="y" min="0" max="50">Y = {{ y }}<br/>
        <input type="range" v-model.number="angle" min="0" max="360">Angle = {{ angle }}<br/>

        <!-- Here human and balloon are two distinct asets -->
        <vector :show-viewport="true">
            <human :x="100" :y="900" width="100" height="100" align="topleft"/>
            <balloon :x="200" width="300" height="200" align="topleft"/>

            <!-- Here balloon and human have been combined to make a single asset -->
            <balloon  color="blue" :x="500 + x" :y="y" width="300" height="200" align="topleft" :a="angle">
                <human align="topleft" :x="1200" :y="3500" width="100" height="100" align-strategy="meet"/>
            </balloon>
        </vector>

    </div>
</template>
