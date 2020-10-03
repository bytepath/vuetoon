<script>
    import CreateAsset from "../../Factories/CreateAsset";

    export default CreateAsset({
        props:{
            ma: {
                type: Number,
                default: 0.1
            },
        },

        components: {
        },

        created(){
        },



        methods:{
            componentAnimations() {
                return {
                    default: {
                        duration: 36000,
                        frames: {
                            0: {
                                action: [
                                    //this.rotateLinear(this.ma)
                                ]
                            },
                        },
                    },
                };
            },
        },
    });
</script>
