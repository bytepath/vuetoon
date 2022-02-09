<script>
    import AnimationEntity from "../../Mixins/AnimationEntity";
    import CalculatesTransformation from "../../Mixins/CalculatesTransformation";

    export default {
        mixins:[AnimationEntity, CalculatesTransformation],
        computed:{
            cssTransform() {
                let p = this.getPosition();
                return {
                    transform: this.transform.toString(),
                    transformOrigin: `${p.centerX}px ${p.centerY}px`,
                };
            },
        },
    }
</script>

<template>
    <div :style="cssTransform">
        <slot></slot>
    </div>
</template>

