import Tween from "../Helpers/Tween";

let retval = class Animation {
    constructor(name, AnimationData, repeat = false) {
        this.name = name;
        this.animation = AnimationData;
        this.repeat = repeat;
        this.timesRepeated = 0;
        this.previousFrame = 0;

        this.INITIAL = 0;
        this.REWIND = -1;
        this.FASTFORWARD = 1;
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
        if (end && this.repeat) {
            let numRuns = Math.trunc(keyframe / end);
            if (numRuns > this.timesRepeated) {
                console.log("need to repeat", numRuns, this.timesRepeated, keyframe, this);
                this.resetAnimation(context);
                this.timesRepeated = numRuns;
            }
        }

        // internal keyframe can vary from "user" keyframe if repeat = true so we need to calculate that
        let frame = this.calculateAnimationKeyframe(keyframe);

        /**
         Determine the direction of playback. Direction can be three states:
         Animation.INITIAL = 0 = Animation has never been played
         Animation.REWIND = 0 = Animation is moving left along timeline toward frame START
         Animation.FASTFORWARD = 0 = Animation is moving right along timeline toward frame END
         */
        let direction = keyframe - this.previousFrame;
        if (direction > 0) {
            direction = this.FASTFORWARD;
        }
        else if (direction < 0) {
            direction = this.REWIND;
        } else {
            direction = this.INITIAL;
        }

        let callBack = (action, forceFrame = null) => {
            let frame = (forceFrame) ? forceFrame : keyframe;

            // If no start frame is specified we assume it's supposed to be zero
            let start = action.start ? action.start : 0;
            // If no end frame is specified assume there isn't one
            let end = (action.end) ? action.end : Number.MAX_SAFE_INTEGER;


            if (frame === start && direction === this.REWIND) {
                console.log("start frame  rewind ", {frame, start, action});
                action.position = this.REWIND;
            }
            else if (frame === end && direction === this.FASTFORWARD) {
                console.log("end frame during fast forward setting position", {frame, end, action});
                action.position = this.FASTFORWARD;
            }



            return (action.handler) ? action.handler({
                keyframe: frame,
                context,
                tween: new Tween(frame, action.start, action.end)
            }) : false;
        };

        // Iterate through the list of actions and execute any within keyframe range
        didSomething |= this.getActionsForFrame(frame, direction, callBack);

        this.previousFrame = keyframe;
        return didSomething;
    }

    getActionsForFrame(keyframe, playbackDirection = 1, callback = null) {

        let processFunc = (callback) ? callback : () => {};
        let actions = Object.values(this.animation.data.actions);

        // If keyframe is moving left on timeline (rewinding) we should iterate thru actions from right to left
        if (playbackDirection < 0) {
            //console.log("reversing actions");
           // actions = actions.reverse();
        }

        // Iterate through the actions
        return actions.filter((action) => {
            // If no start frame is specified we assume it's supposed to be zero
            let start = action.start ? action.start : 0;

            // If no end frame is specified assume there isn't one
            let end = (action.end) ? action.end : Number.MAX_SAFE_INTEGER;


            // keyframe is BEFORE this action on the timeline, but this action has position Animation.INITIAL
            // it means that this action did not finish playing because the keyframe jumped past it's final
            // position. Play this frame at it's start location to ensure animation remains in sync
            if ((keyframe < start && this.previousFrame > start)) {
                if ((playbackDirection === this.REWIND) && (action.position !== this.REWIND)) {
                     console.log("maybe have to finish start", action);
                    // console.log(this.previousFrame, keyframe, start, action);
                    processFunc(action, start);
                }
            }

            // keyframe is AFTER this action on the timeline, but this action has position Animation.INITIAL
            // it means that this action did not finish playing because the keyframe jumped past it's final
            // position. Play this frame at it's end location to ensure animation remains in sync
            else if (keyframe > end && this.previousFrame < end) {
                if ((playbackDirection === this.FASTFORWARD) && (action.position !== this.FASTFORWARD)) {
                    console.log("maybe have to finish end", action);
                    console.log(this.previousFrame, keyframe, start, action);
                    processFunc(action, end);
                }
            }


            // If this action is within its execution range then we need to execute it
            else if ((keyframe >= start) && (keyframe <= end)) {
                processFunc(action);
                return true;
            }

            return false;
        });
    }

    resetAnimation(context) {
        console.log("reset animation");
        return Object.values(this.animation.data.actions.reverse()).filter((action) => {
            if (action.reset) {
                console.log("calling reset func");
                action.reset(context);
            }

            // Call handler from the earliest position of the animation frame
            if (action.handler) {
                let args = {keyframe: action.start, context, tween: new Tween(action.start, action.start, action.end)};
                action.handler(args);
                action.position = 0;
            }
        });
    }
}

let args = {writable: false, enumerable: true, configurable: false};
Object.defineProperty(retval, 'INITIAL', {value: 0, ...args});
Object.defineProperty(retval, 'REWIND', {value: -1, ...args});
Object.defineProperty(retval, 'FASTFORWARD', {value: 1, ...args});

export default retval;
