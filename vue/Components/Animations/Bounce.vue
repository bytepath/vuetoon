<script>
    import CreateAsset from '../../Factories/CreateAsset';
    import Position from "../../../Helpers/Position";

    export default CreateAsset({
        props:{
            mx: {
                type: Number,
                default: 0.1
            },

            my: {
                type: Number,
                default: 0.1
            },
        },

        data(){
            return {
                animPosition: new Position(),
            };
        },


            animations() {
                //console.log("loading bounce anim");
                return {
                    default: [
                        {
                            name: 'bounceyman',
                            start: 0,
                            handler({ context, keyframe }) {
                                //console.log("bounceyman");
                                let val = Math.sin(keyframe/1000) * (context.$props.mx * 100);
                                context.animPosition.x = val;
                            }
                        }
                    ],
                };
            },


        render() {
            return this.$scopedSlots.default({
                position: this.animPosition,
            })
        }
    })
</script>
