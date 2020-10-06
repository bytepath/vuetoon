<script>
    // FilterExample.vue

    import Bytepath from "bytepath";
    import OceanScene from "../../../../Samples/Scenes/Ocean/OceanScene";

    // All of these filters can also be used in your own projects
    let Filters = Bytepath.samples.filters;
    let Matrix = Filters.enterTheMatrix;
    let Underwater = Filters.underwater;
    let Lime = Filters.limeFilter;
    let Peach = Filters.peachFilter;
    let Shadow = Filters.dropShadow;

    export default Bytepath.CreateAsset({
        name: "FilterExample",

        data() {
            return {index: 1};
        },

        computed: {
            useFilter() {
                return [
                    null,
                    Matrix,
                    Lime,
                    Underwater,
                    Shadow,
                    Peach][this.index];
            }
        },

        components: {OceanScene},
    });
</script>

<template>
    <!-- FilterExample.vue -->
    <div>
        <input type="radio" id="matrix" v-model.number="index" value="1"/>Enter The Matrix<br/>
        <input type="radio" id="lime" v-model.number="index" value="2"/>Lime Gram<br/>
        <input type="radio" id="under" v-model.number="index" value="3"/>Underwater<br/>
        <input type="radio" id="shadow" v-model.number="index" value="4"/>Drop Shadow<br/>
        <input type="radio" id="peach" v-model.number="index" value="5"/>Peach Gram<br/>
        <input type="radio" id="nofilter" v-model.number="index" value="0"/>None<br/>


            <ocean-scene :show-viewbox="true" align="topleft" :filter="useFilter" :keyframe="keyframe"/>
    </div>
</template>
