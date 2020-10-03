<script>
    import AnimationEntity from "../Bytepath/Mixins/AnimationEntity";
    import AcceleratesTranslation from "../Bytepath/Mutators/AcceleratesTranslation";

    export default {
        mixins: [
            //AnimationEntity,
            //AcceleratesTranslation,
        ],
        props: {
        },

        data(){
            return {};
        },

        methods:{},
        components:{}
        /**
         <circle class="rd" cx="-50" cy="-50" r="100"/>
         <circle class="ylw" cx="-50" cy="25" r="75"/>
         <rect class="brn" x="-125" y="110" width="150" height="100" />
         <circle class="pur" cx="-50" cy="-50" r="10"/>
         <circle class="gre" cx="-50" cy="-50" r="10"/>
         */
    }
</script>

<template>
    <g :id="'balloon' + _uid" >
        <rect class="brn" x="0" y="0" width="100" height="100" />
        <rect class="ylw" x="0" y="100" width="100" height="100" />
        <rect class="pur" x="100" y="0" width="100" height="100" />
        <rect class="gre" x="100" y="100" width="100" height="100" />

    </g>
</template>

<style scoped>
    .rd { fill: #FF0000; }
    .ylw { fill: yellow; }
    .pur { fill: blue; }
    .gre { fill: green; }
    .brn { fill: saddlebrown;}
</style>
