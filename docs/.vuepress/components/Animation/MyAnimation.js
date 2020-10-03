/**
 * MyAnimation.js
 * The animation from the previous example, now stored in its own file to keep things tidy
 */
import Bytepath from "bytepath";
let _k = Bytepath.CreateKeyframe;

export default [
    _k(0, 100, ({context, keyframe}) => {
        context.balloonPos.x = keyframe * 3;
    }),

    _k(100, 200, ({context, keyframe}) => {
        context.balloonPos.angle = 100 - keyframe;
    }),

    /**
     * You can also just write manual objects here, if that's what you prefer.
     */
    {
        start: 200,
        end: 300,
        handler({context, keyframe}) {
            context.balloonPos.y = 200 - keyframe;
        },
    },
];
