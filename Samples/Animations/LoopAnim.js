// This is the animation I called "loop"
export default [
    {
        name: 'move right from 20,0 to 200,0 between frame 0 and 1300 ',
        start: 0,
        end: 1300,
        handler(context, tween) {
            context.position.x = tween.betweenNumbers(20, 200);
        },
    },

    {
        name: 'this will move down from 0,0 to 0,500 and rotate from 0deg to 250deg between frame 1300 to 2000',
        start: 1300,
        end: 2000,
        handler(context, tween) {
            context.position.y = tween.betweenNumbers(0, 500);
            context.position.angle = tween.betweenNumbers(0, 250);
        },
    }
];
