import Animation from "./Animation";

let retval = class AnimationData {
    constructor(name, data, start = 0, end = null, repeat = false) {
        // The name of this animation
        this.name = name;

        // The frame we start playing this animation
        this.start = start;

        // The last frame of the animation
        this.end = end;

        // Should this animation repeat
        this.repeat = repeat;

        /**
         * Add playback state to each animation action.
         * An animation has three possible playback states
         * Animation.INITIAL:: value = 0
         * This animation function has not been been ran since the last repeat. This is the default value
         *
         * Animation.REWIND:: value = -1
         * This animation has been played at least once with keyframe value decreasing  (Ex: frame 20 to frame 19)
         *
         * Animation.FASTFORWARD:: value = 1
         * This animation has been played at least once with keyframe value increasing (Ex:  frame 10 to frame 11)
         */
        this.data = { actions: [] };
        data.actions.map((action) => {
            this.data.actions.push({ ...action, position: Animation.INITIAL });
        });
    }
}

export default retval;
