export default [
    {
        name: 'Tornado Kick',
        start: 0,
        end: 250,

        handler(context, tween) {
            context.position.x = tween.between(0, 250);
            context.position.angle = context.keyframe % 360;
        }
    },
    {
        name: 'Move back',
        start: 251,
        end: 500,

        handler(context, tween) {
            context.position.x = tween.between(250, 0);
        }
    },
];
