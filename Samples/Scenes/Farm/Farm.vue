<script>
    import CreateAsset from '../../../Factories/CreateAsset';
    import src from "./Farm.svg";
    import Farmer from "./Farmer";
    import Barn from "./Barn";

    export default CreateAsset({
        name: "farm-scene",
        src,
        components: {
            Farmer,
            Barn,
        }
    });
</script>

<template>
    <vector :id="'farm__' + _uid" :show-viewbox="false" :style="{fill: defaultColor }" v-bind="$props" v-slot="">
        <template v-if="layers">
            <rect fill="#E3DAA6" y="-600" width="1384" height="605" />
            <farmer :keyframe="keyframe" :repeat="true" />
        </template>
    </vector>
</template>
