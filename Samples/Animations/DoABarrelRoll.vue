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
                    _k(0, 970, ({context, tween}) => context.defaultPosition.x = tween.number(100, 200)),

                    // From 100 to 970 rotate with our center position set to 100, 0 so we do a big circle
                    _k(100, 970, ({context, tween}) => {
                        context.defaultPosition.angle = 360 - tween.number(0, 360);
                        context.defaultPosition.centerX = 100;
                        context.defaultPosition.centerY = 0;
                    }),

                    // Move very quickly on X direction.
                    _k(970, 1000, ({context, tween}) => context.defaultPosition.x = tween.number(200, 450)),

                    // Land the balloon next to the lighthouse
                    _k(1000, 1200, ({context, tween}) => context.defaultPosition.y = tween.number(0, 620)),
                ],
            };
        },
    });
</script>
