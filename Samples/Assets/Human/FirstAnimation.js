/**
 * FirstAnimation.js
 * Side note: this was the first animation that ever worked in Bytepath!
 */
export default [
    {
        start: 0,
        end: 500,
        handler({context, tween}) {
            context.layers.face.x = tween.number(-50, 50);
            context.layers.rightarm.angle = tween.number(0, 50);
            context.layers.leftarm.y = tween.integer(0, 100);
            context.layers.leftleg.x = tween.number(-75, 0);
            context.layers.rightleg.x = tween.number(75, 0);
        },
    },
    {
        start: 500,
        end: 1000,
        handler({context, tween}) {
            context.layers.face.x = tween.number(50, -50);
            context.layers.rightarm.angle = tween.number(50, 0);
            context.layers.leftarm.y = tween.integer(100, 0);
            context.layers.leftleg.x = tween.number(0, -75);
            context.layers.rightleg.x = tween.number(0, 75);
        },
    },
];
