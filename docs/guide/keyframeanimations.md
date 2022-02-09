---
title: Keyframe Animations
type: bytepath
order: 8
---
## Creating Keyframe Animations

We can create keyframe animations by adding an animations() attibute to the component passed into bytepath.createAsset

**AnimatedBalloon.vue**

<<< @/../bytepath-io/src/examples/Animation/AnimatedBalloon.vue

The Balloon asset should move to X=100 and never go past that point no matter how large :keyframe becomes

:::demo animated-balloon 0 500 
:::

## Repeating animations

Assets have a :repeat prop that if true, will make the animation repeat from 0 if keyframe > end frame of the animation. 
Lets toggle repeat on the simple animation we made in the previous example 

<<< @/../bytepath-io/src/examples/Animation/AnimatedBalloon.vue

:::demo animated-balloon 0 500
:::

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

<<< @/../bytepath-io/src/examples/Animation/CreateKeyframe.vue

:::demo create-keyframe 0 500
:::

- create keyframe can accept 
    - a function
    - start frame, a function,
    - start frame, end frame, a function


## Adding Multiple Keyframes
You can add as many keyframes as you want to an animation. In the example below we make the balloon perform the following steps
 - Frame 0 to 100 -- Scroll X position
  - Frame 100 to 200 -- Rotate
 - Frame 200 to 300 -- Scroll Y Position

<<< @/../bytepath-io/src/examples/Animation/MultiAction.vue

:::demo multi-action 0 500
:::

## Storing Animations In Separate Files

As you can see animations quickly turn your single file components into spaghetti. Luckily there is an easy solution to this. Just store your animations in separate files then import them into your component

<<< @/../bytepath-io/src/examples/Animation/SeparateAnimationFile.vue

<<< @/../bytepath-io/src/examples/Animation/MyAnimation.js

:::demo separate-animation-file 0 500
:::

## Assets can have an unlimited number of animations 

Assets can have multiple animations, just add more keys to the object returned by animations() func.
The human asset we have been using all along has a bunch of premade animations you can use in your
projects. 

<<< @/Samples/Assets/Human/Human.vue

So human has 5 premade animations 
- default: does nothing
- dance: makes the man perform a dance
- chicken: performs a chicken dance
- punch: punches in the air
kick: kicks in the air


<<< @/../bytepath-io/src/examples/Animation/MultipleAnimations.vue

:::demo multiple-animations 0 2000
:::
