<script>
    import AnimationEntity from "../Mixins/AnimationEntity";

    export default {
        mixins: [
            AnimationEntity,
        ],

        props:{
            dx:{
                type: String,
                default: ""
            },

            dy:{
                type: String,
                default: ""
            },

            fontSize:{
                tye: Number,
                default: 60,
            },
        },

        data() {
            return {}
        },


        computed: {
            text(){
                if(this.$slots.default) {
                    if(this.$slots.default){
                        //console.log(this.$slots.default[0]);
                        return this.$slots.default[0].text.replace(/(\r\n|\n|\r)/gm,"").trim();
                    }
                }
            },
        },
    }
</script>

<template>
    <text :dx="dx" :dy="dy" :transform="transform" >{{ text }}</text>
</template>
