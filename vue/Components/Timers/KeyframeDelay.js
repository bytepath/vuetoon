export default {
    mixins: [],
    props: {
        keyframe: {
            type: Number,
            required: true
        },

        // The location that we start calculating this keyframe
        start: {
            type: Number,
            default: 0,
        },

        // The location that that we stop calculating the keyframe. If null we ignore it
        end: {
            type: Number,
            default: null
        }
    },

    computed:{
        /**
         * Determines the "reset" keyframe amount by subtracting the real frame amount from the reset point
         * Will never be < 0
         * @returns {number}
         */
        computedKeyframe(){
            // If end is not null we use it as a maximum value for the computed Keyframe
            if(this.end !== null) {
                if (this.keyframe >= this.end) {
                    return this.end;
                }
            }

            // If we are within the start and end range calculate the keyframe value
            if(this.keyframe >= this.start) {
                let value = this.keyframe - this.start;
                if (value > 0) {
                    return value;
                }
            }

            return 0;
        }
    },

    render() {
        return this.$scopedSlots.default({ keyframe: this.computedKeyframe })
    }
}

