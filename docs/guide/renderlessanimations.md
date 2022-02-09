---
title: Renderless Animations
type: bytepath
order: 12
---
## Renderless animations
if your parent component is basically just a vessel to provide an animation to a child, its best to make it into a renderless animation. 

A renderless animation is a single file component that doesn't render anything, instead just accepts data values via props and passes values via slots. 
Making a renderless animation is easy, just delete the template in your single file component. If Bytepath notices you haven't added a template it will assume you meant to create a renderless animation and proceed accordingly. 

Renderless animations, in conjunction with the default values you can expect to exist in any component can be a very powerful combination. We can use this concept to create animations we can quickly reuse on any asset to quickly 
create complex animation scenes without writing any code. 

In the example below we create a "Barrel Roll" renderless animation component that will make your assets do a loop on the screen. 

:::tip
This is the actual renderless component used on the Bytepath homepage animation
:::

<<< @/../bytepath-io/src/examples/Animation/RenderlessExample.vue

:::demo renderless-example 0 2500
:::

## Running animations in the context of child components
Sometimes you might find yourself wanting to run an animation in the context of your child components but the child component does not have that animation available in it's single file component. 

Of course we could always just import the animation's javascript file in the component and at it to it's list of available animations, but if this animation is specific to the scene you are 
currently building you might not want to do that. 

If you find yourself needing to animate an existing asset to do something new, the fastest way to do this is always going to be manipulating the asset via its available props.

available props
color
x
y
sx
sy
angle
etc
 
However, there are situations where this isn't good enough
- inline prop animation gets messy very quickly if you are trying to do anyting complicated

- you are limited in the variables you can access via prop

- you want to change something INSIDE the scene, not the scene itself

 In these situations you can pass an animation to an asset through its
:anim prop.  

## Running animations via :anim prop
:anim, as we learned about previously, accepts a string that tells your component which of it's animations it should run.
 We can also pass this prop an animation object from another component. The child component will load this animation inside itself and will run this animation in the context of itself when :keyframe changes. 
 This means we can access and change anything we want inside the child component from the context of the parent 


<<< @/../bytepath-io/src/examples/Animation/PropAnimation.vue

:::demo prop-animation 0 2500
:::

## Animations can only access and change properties that exist
This might sound obvious, but since we are running the animation in the context of the child, any data you access and/or change in your animation handler() function must exist in the child class. This means that if you want to change a color, like we did in the previous example, the color variable must exist

:::source DEMO
Make a demo of an animation attempting to access something that doesn't exist in
child class
:::

A makeshift solution to this is to include properties in every asset that we
can be sure exist so we can use these in animations even if we didnt make the original component. We use this concept in the previous example to access the defaultColor property that we know exists. In the balloon asset (the exact same asset we have been using for ALL of the docs!) the defaultColor property is connected to the balloon itself so when we change this color, the color of the balloon changes. Other assets might do something different with this variable, for example, a car might use defaultColor to change the paint color on it's body.

Note that even though these variables exist, there is no guarantee that the child component does anything with it. 


defaut variables available 
### defaultColor 
    - a hex string that is a color

:::source DEMO
 make a example of using defautColor
:::

### defaultposition 
    - a position variable that you can connect to a child asset in your scene. 

:::source DEMO
 make a example of using defaultPosition
:::

### defaultLayer 
    - the layer you want parent compoents to be able to manipulate

:::source DEMO
 make a example of using defaultPosition
:::




## Animations can still run in the parent if a child is using it
A parent component can still access and use any of it's animations even if we are passing it to a child 

:::source DEMO
Show an animation running on parent and child at same time
:::


:::tip WARN
its possible to get confused as to what component is actually running the animation here so be careful
:::

:::source DEMO
make an example of a confusing situation
:::

this means that if you pass the "default" animation to a child, the default animation (which is loaded by default) will run twice -- once in the context of the parent, once in the context of the parent and once in the context of child which might not be what you wanted. Because of this issue its best practice to only pass non default animations to your child but if you need to do this 

-- :disable-animations prop
-- disableAnimations method
-- build a renderless function

all notmal props (x,y,sx,sy,angle,etc)
