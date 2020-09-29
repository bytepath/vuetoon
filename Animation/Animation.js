let retval = class AnimationPlayer {
    constructor(name, AnimationData, repeat = false) {
        this.name = name;
        this.animation = AnimationData;
        this.repeat = repeat;
        this.timesRepeated = 0;
        this.previousKeyframe = 0;

        /**
         Determine the direction of playback. Direction can be three states:
         Animation.INITIAL = 0 = Animation has never been played
         Animation.REWIND = -1 = Animation is moving left along timeline toward frame START
         Animation.FASTFORWARD = 1 = Animation is moving right along timeline toward frame END
         Animation.INFINITY = 2 = Animation runs forever
         */
        this.INITIAL = 0;
        this.REWIND = -1;
        this.FASTFORWARD = 1;
        this.INFINITY = 2;
    }

    /**
     * Converts user keyframes (that continue on with increasing numbers forever) to animation keyframes.
     * Returns null if invalid keyframe for this animation
     *
     * @param keyframe
     * @returns Integer|null
     */
    calculateAnimationKeyframe(keyframe) {
        // If this animation should repeat then we return the modulo of the end keyframe
        if (this.animation.end) {
            if (this.repeat || (keyframe < this.animation.end)) {
                return keyframe % this.animation.end;
            }

            // If we aren't set to repeat and we are past the end we don't need to do anything
            return null;
        }

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

        // internal keyframe can vary from "user" keyframe if repeat = true so we need to calculate that
        let computedFrame = this.calculateAnimationKeyframe(keyframe);

        if (computedFrame !== null) {
            let delta = keyframe - this.previousKeyframe;
            if(delta === 0) return;

            this.previousKeyframe = keyframe;

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


            // If this is a valid keyframe for this animation then process the frame
            if (computedFrame) {
                let animationFrame = this.movePlaybackTo(computedFrame, delta);
                this.processAnimationFrame(context, animationFrame);

            } else {
                this.playFinalFrame(context);
            }
        }

        this.currentFrame = keyframe;
    }

    /**
     * Play the specified frame
     * @param context
     * @param frame an array of functions representing all of the animations that need to run this frame
     */
    // eslint-disable-next-line
    processAnimationFrame(context, frame) {
        if (frame.length > 0) {
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
    movePlaybackTo(keyframe, direction = 1) {

        let actions = this.animation.data.actions;
        if (actions.length == 0) {
            return [];
        }

        if (direction < 0) {
            actions = actions.reverse();
        }

        let retval = {
            current: [],
            outdated: [],
            invalid: [],
            sendme: [],
        };

        actions.map((action) => {
            // If no start frame is specified we assume it's supposed to be zero
            let start = action.start ? action.start : 0;

            // If no end frame is specified assume there isn't one
            let end = (action.end) ? action.end : Number.MAX_SAFE_INTEGER;

            // Check to ensure the animation playback position is in the correct place

            // Check to ensure we finished the previous action
            if (action.position !== this.INFINITY) {

                if (direction === this.FASTFORWARD) {

                    if (action.previousFrame !== action.end) {
                        if (keyframe > action.end) {
                            return retval.outdated.push(this.animation.fastForward(action));
                        }
                    }
                } else {
                    // We didnt reach the final frame of this animation so run its last frame to keep
                    // state in sync
                    if (action.previousFrame !== action.start) {
                        if (keyframe < action.start) {
                            return retval.outdated.push(this.animation.rewind(action));
                        }
                    } else {
                        retval.invalid.push(this.animation.rewind(action));
                    }
                }
            }


            // If this action is within its execution range then we keep it
            if ((keyframe >= start) && (keyframe <= end)) {
                if (action.handler) {
                    return retval.current.push(this.animation.play(action, keyframe));
                }
            }

        }, this);

        //retval.sendme = [...retval.outdated, ...retval.current];
        // Return all actions that need to be ran
        return [...retval.outdated, ...retval.current];
    }

    /**
     * Moves to and plays the last frame of the animation
     * @param context
     * @param frame an array of functions representing all of the animations that need to run this frame
     */
    // eslint-disable-next-line
    playFinalFrame(context) {
        if (this.previousFrame !== this.animation.end) {
            let animationFrame = this.movePlaybackTo(this.animation.end);
            this.processAnimationFrame(context, animationFrame);
            this.previousFrame = this.animation.end;
        }
    }

    /**
     * Moves to and plays the first frame of the animation
     * @param context
     * @param frame an array of functions representing all of the animations that need to run this frame
     */
    // eslint-disable-next-line
    playStartFrame(context) {
        if (this.previousFrame !== this.animation.start) {
            let animationFrame = this.movePlaybackTo(this.animation.start);
            this.processAnimationFrame(context, animationFrame);
            this.previousFrame = this.animation.start;
        }
    }

    resetAnimation(context) {
        this.playFinalFrame(context);
        this.playStartFrame(context, true);

        // Call each reset function if it exists
        let actions = Object.values(this.animation.data.actions.reverse());
        actions.filter((action) => {
            if (action.reset) {
                console.log("calling reset func");
                action.reset(context);
                action.position = this.INITIAL;
            }
        }, this);

        this.previousFrame = 0;
        this.currentFrameRaw = null;
        this.playbackDirection = null;
        this.previousDirection = null;
    }
}

let args = {writable: false, enumerable: true, configurable: false};
Object.defineProperty(retval, 'INITIAL', {value: 0, ...args});
Object.defineProperty(retval, 'REWIND', {value: -1, ...args});
Object.defineProperty(retval, 'FASTFORWARD', {value: 1, ...args});
Object.defineProperty(retval, 'INFINITY', {value: 2, ...args});

export default retval;
