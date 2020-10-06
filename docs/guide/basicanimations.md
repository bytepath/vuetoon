---
title: Basic Animations
type: bytepath
order: 8
---

## :keyframe Prop



## Creating Keyframe Animations

## Repeating animations

## Timers

### Scroll Timer

<div class="scrimba"><a href="" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div>
The Scroll timer component will output a keyframe value based on the scroll position of the page. 

<<< @/docs/.vuepress/components/Timers/UsingScrollTimer.vue

<ClientOnly>
<Timers-UsingScrollTimer />
</ClientOnly>

<br />

### Clock Timer

<div class="scrimba"><a href="" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div>
- The Clock timer works the way you traditionally expect a timer to work. It outputs an integer value that gets larger over time.

- If you are concerned about performance, you can control the animation tick rate using the :fps prop

- If you are concerned about performance, you can control the animation tick rate using the :fps prop

- :fps= 0 will pause the timer

<p class="tip"> No matter what FPS is set to, &lt;clock-timer&gt; will output a number at a rate of 1000 frames = 1 second. This means that by modifying the FPS value your animations wont slow down, they will just be less smooth. 
You can verify this by moving the slider value in the example below. </p>

<<< @/docs/.vuepress/components/Timers/UsingClockTimer.vue


<ClientOnly>
<Timers-UsingClockTimer />
</ClientOnly>

<br />
