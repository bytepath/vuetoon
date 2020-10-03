---
title: Tween
type: bytepath
order: 9
---
## Building animations manually is hard
Before looking at the tween class lets take a look at why it's useful. Take a look at the following example. It's a more complicated version of the keyframe animations we saw on the previous example

This animation performs the following steps 
- Moves right from 0 to 250 (note the frame/2)
- Moves Down and right while rotating frames 501 to 1000
- THIS MEANS WE DO NOTHING FROM FRAMES 1000 - 1500
- Scale x and y without moving from 1500 to 2500

<<< @/docs/.vuepress/components/Animation/ComplicatedAnimation.vue

<Demo :end="2500" v-slot="{ keyframe }">
<Animation-ComplicatedAnimation :keyframe="keyframe" />
</Demo>    

As you start getting into things that are more and more complicated, you start having to do a lot of math to accomplish your goals and math requires spending energy thinking that could be better spent being creative and having fun. 
 - difficult to make animations do exactly what you want
Luckily, there is a solution to that. 

- tween class is a helper object that handles transitioning your animation from the state of your component at the start of an animation frame to the requested end state.

- you can use it to smoothly transition between Start and End state for each data point

## Tweening Between Numbers
    - tween.number tweens between two numbers

<<< @/docs/.vuepress/components/Animation/ComplicatedToTween.vue

<Demo :end="2500" v-slot="{ keyframe }">
<Animation-ComplicatedToTween :keyframe="keyframe" />
</Demo>    



## Tweening Between Integers
- tween methods
    - tween.int same as number but will only return integers
    

# Tweening between booleans    
    - boolean Value is set on the last frame of the current keyframe 


# Tweening between other data
    - between Value A is set at the start of the animation frame, Value B at the end 


## Tween interface
    
- animation provides the tween class the start and end frames of the animation so that it's able to calculate smooth transitions

    
    
### Tweening Between Colors
You can animate colors using the tween.hex function. The color will smoothly transition from the first to the second color over the specified time interval

<<< @/docs/.vuepress/components/KeyframeAnimation/Color.vue

The Balloon asset should change colors as keyframe increases. 

<Demo :end="3000" v-slot:default="{ keyframe }">
<KeyframeAnimation-Color :keyframe="keyframe" />
</Demo>    
