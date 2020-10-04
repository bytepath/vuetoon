/**
 * Punch.js
 * A simple punch animation for the human asset
 */
export default [
    {
        start: 0,
        end: 1500,
        handler({context, tween}) {
            context.layers.face.x = tween.number(-50, 50);
            context.layers.rightarm.x = tween.integer(0, 200);

            context.layers.leftarm.angle =  tween.number(0, 90);
            context.layers.leftarm.centerX = 75;
            context.layers.leftarm.centerY = 200;
        },
    },
    {
        start: 1500,
        end: 3000,
        handler({context, tween}) {
            context.layers.face.x = tween.number(50, -50);
            context.layers.rightarm.x = tween.integer(200, 0);

            context.layers.leftarm.angle =  tween.number(90, 0);
            context.layers.leftarm.centerX = 75;
            context.layers.leftarm.centerY = 200;
        },
    },
];
