export default class Tween {
    constructor(keyframe, start = 0, end = null) {
        // The starting frame of the current action
        this.startFrame = start;

        // The end frame of the current action
        this.endFrame = end;

        // The current frame
        this.keyframe = keyframe;
    }

    betweenNumbers(start, end){
        if(this.keyframe >= this.endFrame){
            return end;
        }

        // The difference between start and end number
        let numberDiff = end - start;

        // The difference between the start and end animation frame
        let frameDiff = this.endFrame - this.startFrame;

        // The amount we need to increase or decrease each frame
        let numbersPerFrame = numberDiff / frameDiff;

        return (this.keyframe - this.startFrame) * numbersPerFrame;
    }
}
