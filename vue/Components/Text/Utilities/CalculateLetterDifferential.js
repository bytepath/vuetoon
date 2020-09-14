/**
 * Returns an array of numbers representing the difference in position between letters.
 * Used by the svg <text> component for dx and dy attributes
 * @param {String} text The text we are animating
 * @param {Number} keyframe the current frame
 * @param {Number} interval the time in frames to wait before animating the next letter
 * @param {function} calc the calculation function. Accepts one argument keyframe and returns the value for that letter
 * @returns {Array} Returns an array of numbers that can be used by the DX and DY attributes of SVG text elem
 */
export default function CalculateLetterDifferential(text, keyframe, interval, calc) {
    let retval = [0];
    let textArray = text.split("");
    let totalMovement = 0;
    textArray.forEach((value, i) => {
        if (i > 0) {
            // We wait a period of {{ Letter_Position * interval }} before starting the animation for each letter
            let waitTime = (i * interval);
            let netFrame = Math.floor(keyframe - waitTime);

            // If the current frame subtract wait time is a negative number, we haven't waited long enough and thus
            // don't animate this letter
            if (netFrame > 0) {

                // Run the provided calculation function
                let position = calc(netFrame);
                if(position !== null) {
                    if (retval[i] === undefined) {
                        retval[i] = 0;
                    }

                    // Move the current letter the amount of the calculation
                    retval[i] += position;

                    // Move the next letter in the opposite direction to negate the movement of this letter
                    if(position !== 0) {
                        retval[i + 1] = -position;
                    }

                    // Keep track of total movement in the system
                    totalMovement += position;
                }
            }
        }
    });

    // If our return array is the same length as the text, but total movement is 0, we have finished animating
    if(retval.length >= textArray.length && totalMovement === 0){
        return [];
    }
    return retval;
};
