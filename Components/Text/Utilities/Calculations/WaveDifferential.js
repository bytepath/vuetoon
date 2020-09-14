/**
 * A simple parabola function to make letters bounce up then down again
 * @param {Number} direction the direction and scale of the initial bounce
 * @param {Number} pullback the force pulling us back to normal position (example: gravity)
 * @returns {function} to be used by the CalculateLetterDifferential Function
 */
export default function WaveDifferential(direction, pullback){
    return (keyframe) => {
        let movement = (keyframe * direction);
        let gravity = (direction * -(pullback)) * Math.pow(keyframe, 2);
        let velocity = movement + gravity;

        if(velocity * direction > 0) {
            return velocity;
        }

        return 0;
    };
};
