export default class AnimationData {
    constructor(name, data, start = 0, end = null, repeat = false) {
        // The name of this animation
        this.name = name;

        // The animation data
        this.data = data;

        // The frame we start playing this animation
        this.start = start;

        // The last frame of the animation
        this.end = end;

        // Should this animation repeat
        this.repeat = repeat;
    }
}
