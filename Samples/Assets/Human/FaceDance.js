/**
 * FirstAnimation.js
 * Side note: this was the first animation that ever worked in Bytepath!
 */
export default [
    {
        start: 0,
        end: 1000,
        handler({context, tween}) {
            context.layers.face.y = tween.number(0, 100);

            context.layers.leftarm.angle =  tween.number(0, 75);
            context.layers.leftarm.centerX = 75;
            context.layers.leftarm.centerY = 225;

            context.layers.rightarm.angle =  360 - tween.number(0, 75);
            context.layers.rightarm.centerX = 175;
            context.layers.rightarm.centerY = 225;

        },
    },
    {
        start: 1000,
        end: 2000,
        handler({context, tween}) {
            context.layers.face.y = tween.number(100, 0);

            context.layers.rightarm.angle = tween.number(285, 360);
            context.layers.rightarm.centerX = 175;
            context.layers.rightarm.centerY = 225;

            context.layers.leftarm.angle = tween.number(75, 0);
            context.layers.leftarm.centerX = 75;
            context.layers.leftarm.centerY = 225;
        },
    },
];
