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
        //console.log("tween num", {start, end, startframe: this.startFrame, endframe: this.endFrame, keyframe: this.keyframe});
        if(start === end){
            return start;
        }

        if(this.keyframe >= this.endFrame){
         //   console.log("tween num return end");
            return end;
        }

        if(this.keyframe <= this.startFrame){
        //    console.log("tween num return start");
            return start;
        }

        // The difference between start and end number
        let numberDiff = end - start;
        //console.log("diff", numberDiff);
        // The difference between the start and end animation frame
        let frameDiff = this.endFrame - this.startFrame;
        //console.log("framediff", frameDiff);

        // The amount we need to increase or decrease each frame
        let numbersPerFrame = numberDiff / frameDiff;
        //console.log("numPerframe", numbersPerFrame);

        //let retval = (this.keyframe - this.startFrame) * numbersPerFrame;
        let retval = start + ( (this.keyframe - this.startFrame) * numbersPerFrame);

        if(retval > end){
           // console.log("return end", end);
          //  console.log();

            return end;
        }
       // console.log("return", retval);
// console.log();
        return retval;
    }


    /**
     tween num 16711680 65535 0 1000 49
     diff -16646145
     framediff 1000
     numPerframe -16646.145
     return 15896018.895


     retval Array(3) [ 16711680, 65535, -4411228.425 ] 265
     tween num 16711680 65535
     diff -16646145
     framediff 1000
     numPerframe -16646.145
     return -5243535.675
     */



    /**
     * Tweens between start and end with only integer values
     * @param start
     * @param end
     * @returns {number} an integer between start and end depending on keyframe location
     */
    integer(start, end){
        let ret =  Math.ceil(this.number(start, end));
        //console.log("tween int ret", ret);
        return ret;
    }

    // /**
    //  * Tweens between the two provided hex values. Useful for colour transitions
    //  * @param start some hex string Example: #000000
    //  * @param end   some hex string Example: #FFFFFF
    //  * @returns {number} an integer between start and end depending on keyframe location
    //  */
    // hex(start, end){
    //     let s = parseInt(start.substring(1), 16);
    //     let e = parseInt(end.substring(1), 16);
    //     let retval = this.integer(s,e);
    //     // [0,1,2].map((i) => retval.push(Math.abs(this.integer(s[0], e[0])).toString(16).toUpperCase()));
    //      retval = "#" + retval.toString(16);
    //     console.log("retval", [s,e, retval], this.keyframe);
    //
    //     // console.log();
    //     //
    //     return retval;
    //     //return "#000000";
    // }

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
        //console.log({s,e});
        [0,1,2].map((i) => {
            let dec = this.integer(s[i], e[i]);
            let value = this.decimalToHexString(dec);

            if(dec == 0) {
                value = "00";
            }

            //console.log("value is", value, dec);
            retval.push(value);
        });
        //console.log("retval", retval);
        retval =  retval = "#" + retval.join("");
        //console.log(retval);
        //console.log();

        return retval;
    }

    decimalToHexString(number)
    {
        if (number < 0)
        {
            number = 0xFFFFFFFF + number + 1;
        }

        return number.toString(16).toUpperCase();
    }
}
