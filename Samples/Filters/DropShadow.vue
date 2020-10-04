<script>
    /* eslint-disable */
    export default {
        props: {
            keyframe: {
                type: Number,
                default: 0,
            },
        },

        data() {
            return {
                offsetX: -20,
                offsetY: -20,
                red: 1,
                green: 1,
                blue: 1,
                alpha: 0.3
            };
        },

        computed: {
            colorMatrix(){
                let retval = "";
                retval += `${this.red} 0 0 0 0 `;
                retval += `0 ${this.green} 0 0 0 `;
                retval += `0 0 ${this.blue } 0 0 `;
                retval += `0 0 0 ${this.alpha } 0 `;

                return retval;
            }
        }
    }
</script>

<template>
    <filter>

        <!-- Get the source alpha and blur it,  -->
        <feGaussianBlur in="SourceAlpha" stdDeviation="10" result="DROP"></feGaussianBlur>

        <!-- offset the drop shadow  -->
        <feOffset in="DROP" :dx="offsetX" :dy="offsetY" result="DROPSHADOW"></feOffset>

        <!-- make the shadow translucent by reducing the alpha channel value to 0.3  -->
        <feColorMatrix type="matrix" in="DROPSHADOW" result="FINALSHADOW" :values="colorMatrix" />

        <!-- Merge the shadow and the source image  -->
        <feMerge>
            <feMergeNode in="FINALSHADOW"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
    </filter>
</template>
