---
title: Basic Transformations
type: bytepath
order: 1
---

## Translations Along X & Y Axis

By modifying the **:X** and **:Y** props of the &lt;vector&gt; we created in the previous example, we can move our rectangle around the screen. In the world of computer graphics, changing the position of an element is referred to as a "Translation"

<<< @/docs/.vuepress/components/BasicTransformations/Translation.vue

<ClientOnly>
<BasicTransformations-Translation />
</ClientOnly>


## Scale Transformations

We can increase or decrease the size of our &lt;vector&gt; by modifying the **:SX** and **:SY** props of the &lt;vector&gt; component. In the world of computer graphics, changing the position of an element is referred to as a "Scale Transformation"


<<< @/docs/.vuepress/components/BasicTransformations/Scale.vue

<ClientOnly>
<Demo>
<BasicTransformations-Scale />
</Demo>
</ClientOnly>

- Note that because we are using vector graphics, we can increase the size of our graphics as much as we want without losing detail or increasing our memory footprint. 


## Rotation Transformations

We can rotate our &lt;vector&gt; components by modifying the **:A** prop. In the world of computer graphics, changing the position of an element is referred to as a "Rotation Transformation"

<<< @/docs/.vuepress/components/BasicTransformations/Rotation.vue


<ClientOnly>
<Demo>
<BasicTransformations-Rotation />
</Demo>
</ClientOnly>


## Translating our prop in a circular motion

can translate in circular motion using math.sin and math.cos. Each of these functions just returns a number between 1 and -1
but the result of sin will be the opposite of cos. Combining the two of these together will make a circular motion 



## Width & Height Props

:::tip 
CURRENTLY BROKEN
:::

Modifying the :width and :height props of a vector will override its internal size and force the image to be the provided dimensions.

<<< @/docs/.vuepress/components/BasicTransformations/WidthHeight.vue


<Demo>
<ClientOnly>
<BasicTransformations-WidthHeight />
</ClientOnly>
</Demo>

:::tip
When manually setting width and height props, the preserveAspectRatio value of the SVGElement is set to "None" meaning you can and will end up with some strangely scaled images if you just enter random values here
::: 
