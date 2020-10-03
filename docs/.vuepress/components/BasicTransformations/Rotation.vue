<script>
    import Bytepath from "bytepath";

    export default {
        data() {
            return { angle: 90 };
        },

        mounted(){
            this.angle = 0;
        },

        components: {
            balloon: Bytepath.samples.assets.balloon,
        }
    }
</script>

<template>
    <div>
        <input type="range" v-model.number="angle" min="0" max="360">Angle = {{ angle }}
        <svg width="100%" height="100%">
            <!-- Rotates in a circle starting at 0 Deg -->
            <balloon :a="angle % 360"/>

            <!-- Rotates in a circle starting at 45 Deg -->
            <balloon color="blue" :a="(45 + angle) % 360" :x="125"/>

            <!-- Rotates in a circle starting at 90 Deg -->
            <balloon color="green" :a="(90 + angle) % 360" :x="225"/>

            <!-- Rotates in a circle starting at 200 Deg -->
            <balloon color="orange" :a="(200 + angle) % 360" :x="325"/>
        </svg>
    </div>
</template>
