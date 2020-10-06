export default {
    mixins: [],
    props: {
        keyframe: {
            type: Number,
            required: true
        },

        // The location that we start calculating this keyframe
        repeat: {
            type: Number,
            required: true,
        },
    },

    computed:{
        computedKeyframe(){
            return this.keyframe % this.repeat;
        }
    },

    render() {
        return this.$scopedSlots.default({ keyframe: this.computedKeyframe })
    }
}

