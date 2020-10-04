/**
 * Punch.js
 * A simple punch animation for the human asset
 */
export default [
    {
        start: 0,
        end: 1000,
        handler({context, tween}) {
            context.layers.rightarm.x = tween.integer(0, 200);
        },
    },
];
