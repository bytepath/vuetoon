<script>
    import Bytepath from "bytepath";

    export default {
        data() {
            return { x: 50, y: 0, angle: 0 };
        },

        components: {
            balloon: Bytepath.samples.assets.tinyBalloon.tinyBalloon,
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
        <human :x="0" :show-viewbox="true" width="100" height="100" :align="'topleft'" :fit="true" />
        <balloon :x="25" :show-viewbox="true" width="100" height="100" :align="'topleft'" :fit="true" />

        <!-- Here balloon and human have been combined to make a single asset -->
        <balloon :x="x" :y="y" :a="angle" v-slot="balloon" width="100" height="100" :align="'topleft'" :fit="true">
            <human :show-viewbox="true" :position="balloon.position" :align="'none'" />
        </balloon>
    </div>
</template>
