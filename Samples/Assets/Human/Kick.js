/**
 * Punch.js
 * A simple punch animation for the human asset
 */
export default [
    {
        start: 0,
        end: 1000,
        handler({context, tween}) {
            context.layers.rightleg.angle = 360 - tween.number(0, 100);
            context.layers.rightleg.centerX = 125;
            context.layers.rightleg.centerY = 350;

            context.layers.leftarm.angle =  45;
            context.layers.leftarm.centerX = 25;
            context.layers.leftarm.centerY = 200;

            context.layers.rightarm.angle =  300;
            context.layers.rightarm.centerX = 125;
            context.layers.rightarm.centerY = 225;
        },
    },
];
