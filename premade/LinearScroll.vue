<script>
    import AnimationEntity from "../Mixins/AnimationEntity";

    export default {
        mixins: [AnimationEntity],
        props:{
          start:{
              type: Number,
              default: 0
          },
          end: {
              type: Number,
              default: 99999
          },
          my: {
              type: Number,
              default: 1,
          },
          mx: {
              type: Number,
              default: 1,
          },
        },

        data(){
            //console.log("linear scroll");
            return {
                animations: {
                    default: this.calculateScrollAnimation()
                }
            };
        },

        watch: {
            start(){
                this.calculateScrollAnimation();
            },
            end() {
                this.calculateScrollAnimation();
            },
        },

        methods:{
          calculateScrollAnimation() {
              // console.log("calculating scroll animation");
              let animation = {};
              animation.duration = this.end;
              animation.frames = {};
              animation.frames[this.start] = {
                stopAt: this.end,
                action: this.scrollLinear(this.mx, this.my)
              };

              return animation;
          }
        },
    }

</script>

<template>
        <g :id="name" :transform="transform">
            <text>HELLO</text>
            <slot :matrix="transform"></slot>
        </g>
</template>
