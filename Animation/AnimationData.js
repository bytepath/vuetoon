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
         *
         * Animation.INFINITY:: value = 2
         * This animation plays indefinitely because it doesn't have an end value
         */
        this.data = {actions: []};
        let i = 0;
        data.actions.map((action) => {

            let newAction = {
                ...action,
                position: Animation.INITIAL,
                index: i,
                previousFrame: 0
            };

            // Add infinity action if no end


            this.data.actions.push(newAction);
            i++;
        });
    }
};

export default retval;
