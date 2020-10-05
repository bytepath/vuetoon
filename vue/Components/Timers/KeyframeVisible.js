import CalculatesVisibility from "../../Mixins/CalculatesVisibility";

export default {
    mixins: [ CalculatesVisibility ],
    props: {
        keyframe: {
            type: Number,
            required: true
        },
    },

    data() {
        return {
            // Child is visible on this frame
            visibleOnKeyframe: null,
            hasReset: false,
        };
    },

    computed:{
        /**
         * Determines the "reset" keyframe amount by subtracting the real frame amount from the reset point
         * Will never be < 0
         * @returns {number}
         */
        computedKeyframe(){
            if(!this.wasVisible) {
                return this.keyframe;
            }

            if(!this.hasReset) {
                if (this.isVisible()) {
                    if (this.visibleOnKeyframe === null) {
                        this.visibleOnKeyframe = this.keyframe;
                    } else {
                        if (this.keyframe > this.visibleOnKeyframe) {
                            this.visibleOnKeyframe = this.keyframe;
                        }
                    }
                }
            }

            if(this.visibleOnKeyframe !== null) {
                if(this.keyframe <= this.visibleOnKeyframe) {
                    return this.keyframe;
                }

                this.hasReset = true;
                let retval = this.keyframe % this.visibleOnKeyframe;
                if(this.keyframe >= this.visibleOnKeyframe && retval === 0)
                this.wasVisible = false;
                return retval;
            }

            return 0;
        }
    },

    render() {
        return this.$scopedSlots.default({ keyframe: this.computedKeyframe })
    }
}

