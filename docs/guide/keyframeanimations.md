---
title: Keyframe Animations
type: bytepath
order: 8
---
## Creating Keyframe Animations

We can create keyframe animations by adding an animations() attibute to the component passed into bytepath.createAsset

**AnimatedBalloon.vue**

<<< @/docs/.vuepress/components/Animation/AnimatedBalloon.vue

The Balloon asset should move to X=100 and never go past that point no matter how large :keyframe becomes

<ClientOnly>
<Demo :end="1000" v-slot="{ keyframe }">
<Animation-AnimatedBalloon :keyframe="keyframe" />
</Demo>    
</ClientOnly>

## Repeating animations

Assets have a :repeat prop that if true, will make the animation repeat from 0 if keyframe > end frame of the animation. 
Lets toggle repeat on the simple animation we made in the previous example 

```html
<!-- line 35-37 of AnimatedBalloon.vue -->
<template>
    <balloon :repeat="true" color="blue" :position="balloonPos" />
</template>
```

<ClientOnly>
<Demo :end="1000" v-slot="{ keyframe }">
<Animation-AnimatedBalloon color="blue" :repeat="true" :keyframe="keyframe" />
</Demo> 
</ClientOnly>

### Animations are reactive
Context is just a vue component so if you change any reactive data inside of it (such as position), your art asset will
automatically update and/or re render if required.

### Using Create Keyframe function
You can create your animations by writing objects manually like we did in the previous example, and everything will work fine.
However, writing objects manually 
 - is a bit of a chore 
 - prone to errors and typos 
 - can be messy in the single file component paradigm if you have a lot of animation frames
 
 Instead its suggested you use the bytepath CreateKeyframe function to create animations in a functional style. The following 
 example is equivalent to the animation we made in the previous example

<<< @/docs/.vuepress/components/Animation/CreateKeyframe.vue

<ClientOnly>
<Demo :end="1000" v-slot="{ keyframe }">
<Animation-CreateKeyframe :keyframe="keyframe" />
</Demo>    
</ClientOnly>

- create keyframe can accept 
    - a function
    - start frame, a function,
    - start frame, end frame, a function


## Adding Multiple Keyframes
You can add as many keyframes as you want to an animation. In the example below we make the balloon perform the following steps
 - Frame 0 to 100 -- Scroll X position
  - Frame 100 to 200 -- Rotate
 - Frame 200 to 300 -- Scroll Y Position

<<< @/docs/.vuepress/components/Animation/MultiAction.vue

<ClientOnly>
<Demo :end="1000" v-slot="{ keyframe }">
<Animation-MultiAction :keyframe="keyframe" />
</Demo>    
</ClientOnly>


## Storing Animations In Separate Files

As you can see animations quickly turn your single file components into spaghetti. Luckily there is an easy solution to this. Just store your animations in separate files then import them into your component

<<< @/docs/.vuepress/components/Animation/SeparateAnimationFile.vue

<<< @/docs/.vuepress/components/Animation/MyAnimation.js

<ClientOnly>
<Demo :end="1000" v-slot="{ keyframe }">
<Animation-SeparateAnimationFile :keyframe="keyframe" />
</Demo>
</ClientOnly>

## Assets can have an unlimited number of animations 

Assets can have multiple animations, just add more keys to the object returned by animations() func.
The balloon example we have been using all along actually has some animations baked right into it. Lets take a look
at its code block to see whats happening there

::: v-pre
```html
<!-- Balloon.vue -->
<script>
    /**
     * Note to docs readers:
     * The directory structure is a bit different than other examples because its in the bytepath core.
     * Dont think too much about this.
     */
    import CreateAsset from '../../../Factories/CreateAsset';
    import Position from '../../../../Helpers/Position';
    import _k from '../../../Factories/CreateKeyframe';

    export default CreateAsset({
        color: '#FB7272',

        data() {
            return {
                basket: new Position({
                    width: 100,
                    height: 100,
                    x: 110,
                    y: 350,
                    scaleX: 4,
                }),
            }
        },

        animations() {
            return {
                /**
                 * By default we dont play any animation
                 */
                default: null,

                /**
                 * This is the amimation from the docs that scrolls the balloon from X=0 to X=100.
                 * Using a functional style we can fit the whole animation on a single line.
                 */
                babystep: [_k(0, 100, ({context, keyframe}) => context.balloonPos.x = keyframe)],

                /**
                 * Rotates in place for infinity seconds
                 */
                spin: [_k(0, ({context, keyframe}) => context.balloonPos.angle = (keyframe / 10) % 360)],

                /**
                 * Translates the balloon in a circular motion for infinity seconds
                 */
                circle: [
                    _k(0, ({context, keyframe}) => {
                        context.balloonPos.x = Math.sin(keyframe / 100) * 300;
                        context.balloonPos.y = Math.cos(keyframe / 100) * 300;
                    }),
                ],

                /**
                 * The animation used on the bytepath homepage that does a loop then lands next to the lighthouse
                 */
                loopThenLand: [
                    // Translate X from 100 to 500
                    _k(0, 970, ({context, tween}) => context.balloonPos.x = tween.number(100, 500)),

                    // From 100 to 970 rotate with our center position set to 100, 0 so we do a big circle
                    _k(100, 970, ({context, tween}) => {
                        context.balloonPos.angle = 360 - tween.number(0, 360);
                        context.position.centerX = 100;
                        context.position.centerY = 0;
                    }),

                    // Move very quickly on X direction.
                    _k(970, 1000, ({context, tween}) => context.balloonPos.x = tween.number(500, 850)),

                    // Land the balloon next to the lighthouse
                    _k(1000, 1200, ({context, tween}) => context.balloonPos.y = tween.number(0, 620)),
                ],

                /**
                 * Cycles the color of the balloon from R to G to B
                 */
                RGB: [
                    _k(0, 1000, ({context, tween}) => context.defaultColor = tween.hex("#0000FF", "#FF0000")),
                    _k(1000, 2000, ({context, tween}) => context.defaultColor = tween.hex("#FF0000", "#00FF00")),
                    _k(2000, 3000, ({context, tween}) => context.defaultColor = tween.hex("#00FF00", "#0000FF")),
                ]
            };
        },
    });
</script>
```
:::



So balloon has 5 premade animations 
- default: does nothing
- babystep the example from earlier  
- spin Rotates indefinitely
-circle: Translates in a circle
- loopThenLand: The animation used on the bytepath homepage that does a loop then lands next to the lighthouse
- changeColor:  Changes the colour of the balloon (we will look at this soon!)


<<< @/docs/.vuepress/components/Animation/MultipleAnimations.vue

<ClientOnly>
<Demo :end="2500" v-slot="{ keyframe }">
<Animation-MultipleAnimations :keyframe="keyframe" />
</Demo>    
</ClientOnly>
