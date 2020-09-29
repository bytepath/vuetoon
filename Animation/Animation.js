/* eslint-disable */

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
        this.INFINITY = 2;
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
        if (this.animation.end) {
            //console.log("repeat keyframe", this);
            if (this.repeat || (keyframe < this.animation.end)) {
                return keyframe % this.animation.end;
            }
        }

        //console.log("normal keyframe", this);

        return keyframe;
    }

    /**
     * Runs all valid animations for the provided keyframe
     * @param keyframe
     * @param context
     * @returns {boolean}
     *
     * @optimize We compute and return a list of valid animations then return them and process one by one. Can save some
     * frames here by passing a callback (already supported)
     */
    computeFrame(keyframe, context) {

        // Did we do anything in this frame (and therefore need to redraw, etc)
        let didSomething = false;

        // Should we repeat the animation
        let end = this.animation.end;
        if (end && this.repeat) {
            let numRuns = Math.trunc(keyframe / end);
            if (numRuns > this.timesRepeated) {
                //console.log("need to repeat", numRuns, this.timesRepeated, keyframe, this);
                this.resetAnimation(context);
                this.timesRepeated = numRuns;
            }
        }

        // internal keyframe can vary from "user" keyframe if repeat = true so we need to calculate that
        let computedFrame = this.calculateAnimationKeyframe(keyframe);

        /**
         Determine the direction of playback. Direction can be three states:
         Animation.INITIAL = 0 = Animation has never been played
         Animation.REWIND = 0 = Animation is moving left along timeline toward frame START
         Animation.FASTFORWARD = 0 = Animation is moving right along timeline toward frame END
         */
        let direction = keyframe - this.previousFrame;
        if (direction > 0) {
            direction = this.FASTFORWARD;
        } else if (direction < 0) {
            direction = this.REWIND;
        } else {
            direction = this.INITIAL;
        }


        //let callback = this.getActionRunner(context, computedFrame);
        let callback = null;
        // Iterate through the list of actions and execute any within keyframe range
        //let actions = this.getActionsForFrame(computedFrame, direction, callback);

        // eslint-disable-line
        let animationFrame = this.movePlaybackTo(computedFrame, direction);
        this.playAnimationFrame(context, animationFrame);

        this.previousFrame = (keyframe > end) ? end : keyframe;
        return didSomething;
    }


    /**
     * Play the specified frame
     * @param context
     * @param frame an array of functions representing all of the animations that need to run this frame
     */
    // eslint-disable-next-line
    playAnimationFrame(context, frame) {
        if(frame.length > 0) {
            frame.map((action) => {
                action(context);
            });
        }
    }




    /**
     * Returns an array functions that must be ran in order from left to right to ensure animation is in the correct
     * state
     * @param keyframe the frame we are moving to
     * @param direction the direction we are moving
     *
     * @optimize We currently check ALL previous actions to ensure valid state but we could probably do this a faster way
     */
    movePlaybackTo(keyframe, playbackDirection = 1) {
        let actions = this.animation.data.actions;
        if (actions.length > 0) {
            console.log();
        }
        if (!playbackDirection) {
            actions = actions.reverse();
        }

        let retval = {
            current: [],
            outdated: [],
        };

        actions.map((action) => {
            // If no start frame is specified we assume it's supposed to be zero
            let start = action.start ? action.start : 0;

            // If no end frame is specified assume there isn't one
            let end = (action.end) ? action.end : Number.MAX_SAFE_INTEGER;

            let index = action.index;
            // Check to ensure the animation playback position is in the correct place
            if (index !== 0) {
                let previousAction = this.animation.data.actions[index - 1];

                // Check to ensure we finished the previous action
                if (previousAction.position !== this.INFINITY) {

                    if (playbackDirection === this.FASTFORWARD) {

                        if (previousAction.previousFrame !== previousAction.end) {
                            if(keyframe > previousAction.end) {
                                return retval.outdated.push(this.animation.fastForward(previousAction));
                            }

                        }
                    }
                    else {
                        // We didnt reach the final frame of this animation so run its last frame to keep
                        // state in sync
                        if (previousAction.previousFrame !== previousAction.start) {
                           // return retval.outdated.push(this.animation.rewind(previousAction));
                        }
                    }
                }
            }

            // If this action is within its execution range then we keep it
            if ((keyframe >= start) && (keyframe <= end)) {
                if(action.handler) {
                    return retval.current.push(this.animation.play(action, keyframe));
                }
            }

        }, this);


        // Return all actions that need to be ran
        return [ ...retval.outdated, ...retval.current];
    }

    resetAnimation(context) {
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
        }, this);
    }

    /**
     * Returns a list of actions we need to run on this keyframe
     * @param keyframe
     * @param playbackDirection
     * @param callback
     * @returns {(*|NotificationAction)[]}
     */
    getActionsForFrame(keyframe, playbackDirection = 1, callback = null) {
        let actions = Object.values(this.animation.data.actions);

        // If keyframe is moving left on timeline (rewinding) we should iterate thru actions from right to left
        if (playbackDirection < 0) {
            //console.log("reversing actions");
            actions = actions.reverse();
        }

        // Iterate through the actions
        let i = -1;
        return actions.filter((action) => {
            i++;
            i = Math.abs(i);
            //console.log("I is", i, action);

            // If no start frame is specified we assume it's supposed to be zero
            let start = action.start ? action.start : 0;

            // If no end frame is specified assume there isn't one
            let end = (action.end) ? action.end : Number.MAX_SAFE_INTEGER;

            // If this action is within its execution range then we keep it
            if ((keyframe >= start) && (keyframe <= end)) {
                // If a callback has been provided then
                if (callback) {
                    callback.apply(this, [action]);
                }

                return true;
            }

            return false;
        }, this);
    }
}

let args = {writable: false, enumerable: true, configurable: false};
Object.defineProperty(retval, 'INITIAL', {value: 0, ...args});
Object.defineProperty(retval, 'REWIND', {value: -1, ...args});
Object.defineProperty(retval, 'FASTFORWARD', {value: 1, ...args});
Object.defineProperty(retval, 'INFINITY', {value: 2, ...args});

export default retval;
