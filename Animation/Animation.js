import Tween from "../Helpers/Tween";

export default class Animation {
    constructor(name, AnimationData, repeat = false) {
        this.name = name;
        this.animation = AnimationData;
        this.repeat = repeat;
        this.timesRepeated = 0;
    }

    /**
     * Converts user keyframes (that continue on with increasing numbers forever) to animation keyframes, which if set
     * to repeat, loops back to the beginning when we reach the end of the animation
     *
     * @param keyframe
     * @returns number
     */
    calculateAnimationKeyframe(keyframe) {
        // If this animation should repeat then we return the modulo of the end keyframe
        if ((this.repeat) && (this.animation.end)) {
            return keyframe % this.animation.end;
        }

        return keyframe;
    }

    computeFrame(keyframe, context) {

        // Did we do anything in this frame (and therefore need to redraw, etc)
        let didSomething = false;

        // Should we repeat the animation
        let end = this.animation.end;
        if (end) {
            let numRuns = Math.floor(keyframe / end);
            if (numRuns > this.timesRepeated) {
                this.resetAnimation(context);
                this.timesRepeated = numRuns;
            }
        }

        // internal keyframe can vary from "user" keyframe if repeat = true so we need to calculate that
        let frame = this.calculateAnimationKeyframe(keyframe);

        //console.log("animation compute frame", this.name, keyframe, frame);

        // Iterate through the list of actions and execute any within keyframe range
        didSomething |= this.getActionsForFrame(frame, (action) => {
            //console.log("hello from action process func", action.handler, context);
            return (action.handler) ? action.handler(context, new Tween(frame, action.start, action.end)) : false;
        });

        return didSomething;
    }

    getActionsForFrame(keyframe, callback = null) {
        // Iterate through the actions
        return Object.values(this.animation.data.actions).filter((action) => {
            // If no start frame is specified we assume it's supposed to be zero
            let start = action.start ? action.start : 0;

            // If no end frame is specified assume there isn't one
            let end = (action.end) ? action.end : Number.MAX_SAFE_INTEGER;

            // If this action is within its execution range then we need to execute it
            if ((keyframe >= start) && (keyframe <= end)) {
                if (callback) {
                    callback(action);
                }
                return true;
            }

            return false;
        });
    }

    resetAnimation(context) {
        return Object.values(this.animation.data.actions.reverse()).filter((action) => {
            if (action.reset){
                action.reset(context);
            }
        });
    }
}
