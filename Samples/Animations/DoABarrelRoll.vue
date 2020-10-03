<!-- DoABarrelRoll.vue -->
<script>
    import _k from '../../Factories/CreateKeyframe';
    import CreateAsset from '../../Factories/CreateAsset';

    export default CreateAsset({
        name: "DoABarrelRoll",
        animations() {
            return {
                default: [
                    // Translate X from 100 to 500
                    _k(0, 1400, ({context, tween}) => {
                        context.defaultPosition.x = tween.number(100, 800);
                        context.defaultPosition.angle = 360 - tween.number(0, 360);
                        context.defaultPosition.centerX = 100;
                        context.defaultPosition.centerY = 0;
                    }),

                    _k(830, 1400, ({context, tween}) => context.defaultPosition.y = tween.number(0, 740)),
                ],
            };
        },
    });
</script>
