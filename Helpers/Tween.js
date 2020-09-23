export default class Tween {
    constructor(keyframe, start = 0, end = null) {
        // The starting frame of the current action
        this.startFrame = start;

        // The end frame of the current action
        this.endFrame = end;

        // The current frame
        this.keyframe = keyframe;
    }

    /**
     * Tweens between start and end with whatever numbers come along the way
     * @param start a number
     * @param end a number
     * @returns {number} a number between start and end depending on keyframe location
     */
    number(start, end){
        if(this.keyframe >= this.endFrame){
            return end;
        }

        if(this.keyframe <= this.startFrame){
            return start;
        }

        // The difference between start and end number
        let numberDiff = end - start;

        // The difference between the start and end animation frame
        let frameDiff = this.endFrame - this.startFrame;

        // The amount we need to increase or decrease each frame
        let numbersPerFrame = numberDiff / frameDiff;

        return (this.keyframe - this.startFrame) * numbersPerFrame;
    }

    /**
     * Tweens between start and end with only integer values
     * @param start
     * @param end
     * @returns {number} an integer between start and end depending on keyframe location
     */
    integer(start, end){
        return Math.ceil(this.number(start, end));
    }

    /**
     * Tweens between the two provided hex values. Useful for colour transitions
     * @param start some hex string Example: #000000
     * @param end   some hex string Example: #FFFFFF
     * @returns {number} an integer between start and end depending on keyframe location
     */
    hex(start, end){
        let s = start.slice(1).match(/.{1,2}/g).map((val) => parseInt(val, 16));
        let e = end.slice(1).match(/.{1,2}/g).map((val) => parseInt(val, 16));
        let retval = [];
        [0,1,2].map((i) => retval.push(Math.abs(this.integer(s[0], e[0])).toString(16).toUpperCase()));
        console.log("retval", retval);
        retval =  retval = "#" + retval.join("");
        console.log(retval);
        console.log();

        return retval;
    }
}
