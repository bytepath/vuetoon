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

<<< @/docs/.vuepress/components/Animation/AnimatedBalloon.vue


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
The human asset we have been using all along has a bunch of premade animations you can use in your
projects. 

<<< @/Samples/Assets/Human/Human.vue

So human has 5 premade animations 
- default: does nothing
- dance: makes the man perform a dance
- chicken: performs a chicken dance
- punch: punches in the air
kick: kicks in the air


<<< @/docs/.vuepress/components/Animation/MultipleAnimations.vue

<ClientOnly>
<Demo :end="3000" v-slot="{ keyframe }">
<Animation-MultipleAnimations :keyframe="keyframe" />
</Demo>    
</ClientOnly>
