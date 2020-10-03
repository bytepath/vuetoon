---
title: Basic Transformations
type: bytepath
order: 1
---
## Translations Along X & Y Axis

<div class="scrimba"><a href="" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div>
By modifying the **:X** and **:Y** props of the &lt;vector&gt; we created in the previous example, we can move our rectangle around the screen. In the world of computer graphics, changing the position of an element is referred to as a "Translation"

``` html
<script>
    import Bytepath from "bytepath";

    export default {
        components: {
            vector: Bytepath.graphics.vector,
        }
    }
</script>

<template>
    <vector :x="100" :y="100">
        <rect width="50" height="50" fill="red" />
    </vector>
</template>
```




<ClientOnly>
```html
<script>
alert("hello");
</script>
```
</ClientOnly>

<ClientOnly>
<BasicTransformations-Translation />
</ClientOnly>

<br />

## Scale Transformations

<div class="scrimba"><a href="" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div>
We can increase or decrease the size of our &lt;vector&gt; by modifying the **:SX** and **:SY** props of the &lt;vector&gt; component. In the world of computer graphics, changing the position of an element is referred to as a "Scale Transformation"

``` html
<script>
    import Bytepath from "bytepath";

    export default {
        components: {
            vector: Bytepath.graphics.vector,
        }
    }
</script>

<template>
    <svg width="100%" height="100%">
        <vector>
            <rect width="50" height="50" fill="red" />
        </vector>
        
        <vector :x="100" :sx="2" :sy="2">
            <rect width="50" height="50" fill="blue" />
        </vector>
        
        <vector :x="275" :sx="4" :sy="3">
            <rect width="50" height="50" fill="green" />
        </vector>
        
        <vector :x="425" :sx="0.5" :sy="3">
            <rect width="50" height="50" fill="orange" />
        </vector>
    </svg>
</template>
```

<Demo>
<BasicTransformations-Scale />
</Demo>

<ClientOnly>
<script>
console.log("DOGS");
</script>
</ClientOnly>

<p class="tip success">Note that because we are using vector graphics, we can increase the size of our graphics as much as we want without losing detail or increasing our memory footprint.</p> 

<br />

## Rotation Transformations

<div class="scrimba"><a href="" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div>
We can rotate our &lt;vector&gt; components by modifying the **:A** prop. In the world of computer graphics, changing the position of an element is referred to as a "Rotation Transformation"

``` html
<script>
    import Bytepath from "bytepath";

    export default {
        components: {
            vector: Bytepath.graphics.vector,
        }
    }
</script>

<template>
    <svg width="100%" height="100%">
        <g transform="translate(0, 50)">
            <vector>
                <rect width="100" height="50" fill="red"/>
            </vector>
            <vector :a="45" :x="125">
                <rect width="100" height="50" fill="blue"/>
            </vector>

            <vector :a="90" :x="225">
                <rect width="100" height="50" fill="green"/>
            </vector>

            <vector :a="200" :x="325">
                <rect width="100" height="50" fill="orange"/>
            </vector>
        </g>
    </svg>
</template>
```

<ClientOnly>
<Demo>
<BasicTransformations-Rotation />
</Demo>
</ClientOnly>


<p class="tip success">Note that because we are using vector graphics, we can increase the size of our graphics as much as we want without losing detail or increasing our memory footprint.</p> 

<br />

## Translating our prop in a circular motion

can translate in circular motion using math.sin and math.cos. Each of these functions just returns a number between 1 and -1
but the result of sin will be the opposite of cos. Combining the two of these together will make a circular motion 



## Width & Height Props

<p class="tip">CURRENTLY BROKEN</p>

Modifying the :width and :height props of a vector will override its internal size and force the image to be the provided dimensions.

``` html
<script>
    import Bytepath from "bytepath";

    export default {
        components: {
            vector: Bytepath.graphics.vector,
        }
    }
</script>

<template>
    <svg width="500" height="100">
        <vector :width="10" :height="10">
            <rect width="100" height="50" fill="red"/>
        </vector>
    </svg>
</template>
```

<Demo>
<ClientOnly>
<BasicTransformations-WidthHeight />
</ClientOnly>
</Demo>

<p class="tip">When manually setting width and height props, the preserveAspectRatio value of the SVGElement is set to "None" meaning you can and will end up with some strangely scaled images if you just enter random values here</p> 

<br />
