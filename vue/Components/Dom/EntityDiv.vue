<script>
    import AnimationEntity from "../../Mixins/AnimationEntity";

    export default {
        mixins:[AnimationEntity],
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

