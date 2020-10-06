import CalculatesVisibility from "../../Mixins/CalculatesVisibility";

export default {
    mixins: [CalculatesVisibility],
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
            repeatAt: Number.MAX_SAFE_INTEGER,
        };
    },

    computed: {
        /**
         * @returns {number}
         */
        computedKeyframe() {
            let currentFrame = (this.repeatAt) ? (this.keyframe % this.repeatAt) : this.keyframe;
            if(this.repeatAt === Number.MAX_SAFE_INTEGER) {
                if (this.isVisible()) {


                    // If this is the first time this asset has been visible then set whatever the current
                    // keyframe is
                    if (this.visibleOnKeyframe === null) {
                        this.visibleOnKeyframe = currentFrame;
                    }

                    // This is not the first time this asset has been visible so we only set keyframe if
                    // its greater than the current highest visible frame. Remember we are just trying
                    // to figure out which frame we go off screen
                    else {
                        if (currentFrame > this.visibleOnKeyframe) {
                            this.visibleOnKeyframe = currentFrame;
                        }
                    }

                    return currentFrame;
                }

                // Asset is NOT visible
                else {

                    if (this.wasVisible) {
                        this.repeatAt = this.visibleOnKeyframe;
                        this.visibleOnKeyframe = null;
                        this.wasVisible = false;
                    }
                }
            }

            return currentFrame;
        },
    },

    render() {
        return this.$scopedSlots.default({keyframe: this.computedKeyframe})
    }
}

