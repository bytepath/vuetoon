<script>
    import bytepath from 'bytepath';
    import Cabin from "./Cabin";
    import Hull from "./Hull";
    import Fisherman from "./Fisherman";
    import Roof from "./Roof";
    import Buoy from "./Buoy";

    export default {
        mixins: [
            bytepath.AnimationEntity,
        ],
        props: {
        },

        data(){
            return {

            };
        },

        methods:{
            fishermanClicked() {
                alert("fisherman clicked");
            },
        },

        components:{
            Cabin,
            Hull,
            Fisherman,
            Roof,
            Buoy,
        }

    }
</script>

<template>
    <g :id="'boat' + _uid" :transform="transform">
        <g transform="translate(0 -143)">
            <cabin />
        </g>
        <hull />
        <g transform="translate(430, -25)">
            <fisherman @click.native="fishermanClicked" />
        </g>
        <g transform="translate(550 50)">
            <buoy />
        </g>
        <g transform="translate(0, -428)">
            <roof />
        </g>
    </g>
</template>

<style scoped>
</style>
