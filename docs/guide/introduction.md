---
title: Introduction to Bytepath
---
## What is BytePath?

Bytepath is a framework for building vector graphics and animations in your web development projects. BytePath was designed with the goal that is has to be ***FUN*** meaning has been designed from the ground up to be as simple as possible, allowing you to use the skills and tools you already have to build interactive scenes that are only limited by your imagination.   

- **For Artists/Creatives** 
    - Art assets are created using the tools you already know how to use. If you are familiar with Adobe Illustrator, Affinity Designer, or any other program that can output SVG files, You know everything you need to start creating and sharing your ideas with the world

    - Animations are created using simple declarative steps that anyone can use and understand. Bytepath will handle the hard work for you allowing you can focus on the creative process. 

    - Build once, reuse forever. Bytepath assets are designed to be modular and reusable in future projects. Share your creations with the community allowing others to build new creations using assets built by you. 
        
- **For Developers** 
    - Bytepath has been designed to be used by web developers and makes the assumption that you have no experience with computer graphics.

    - BytePath is built on top of <a href="https://www.vuejs.org">Vue.js</a>. The same skills you've perfected to make awesome websites can now be used to create computer graphics. Anything you can do in vue, you can do here (slots, $emit, Mouse/Keyboard Events, props, mixins, etc) 
    
    - Art assets are single file Vue.js components allowing you to store your art, code, and animations in a single reusable module. 
    
    - Rotate, Scale, and reposition on screen graphics by modifying prop values. Art assets will automatically redraw after any change of position

    - Animate scenes with dead simple javascript objects you already know how to write. Animations will automatically update when the :keyframe prop of a component changes 
    
    - No art skills? Use NPM, Yarn, etc to install community made assets that you can re-purpose for use in your own projects. 
   
     

    

		


## Getting Started
<a class="button" href="installation.html">Installation</a>
<p class="tip">The official guide assumes an intermediate level knowledge of HTML, CSS, and JavaScript, and the Vue.js framework. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics then come back! Prior experience with other frameworks helps, but is not required.</p>

## Rendering Our First Vector Graphic

Lets start by rendering a simple rectangle using the included the &lt;vector&gt; component.
Internally, &lt;vector&gt; is just a really fancy &lt;svg&gt;, so any valid &lt;svg&gt; syntax can be written inside. 
``` html
<!-- Rectangle.vue -->
<script>
    import Bytepath from "bytepath";

    export default {
        props: {
            color: {
                type: String,
                default: "red",
            }
        },

        components: {
            vector: Bytepath.graphics.vector,
        }
    }
</script>

<template>
    <vector>
        <rect width="50" height="50" :fill="color" />
    </vector>
</template>
```

<ClientOnly>
<Introduction-Rectangle />
</ClientOnly>

<p class="tip">It's helpful to be familiar with the &lt;svg&gt; tag, but if you aren't, dont worry! You won't be manually building assets like this in real projects unless you have a specific reason to do so.</p>

## Component Based Assets

Since the rectangle we just created is just a normal single file Vue component, we can now use it over and over again without having to re write any ugly XML syntax by importing Rectangle.vue into another component, just like we can do in any Vue.js based app.
By changing the :color prop we added to the &lt;rectangle&gt; component, we can now create an unlimited number of unique graphical assets simply by changing the color.   

``` html
<!-- Rectangle.vue -->
<script>
    import Rectangle from "./Rectangle";

    export default {
        components: { Rectangle },
    }
</script>

<template>
    <div>
        <rectangle fill="red" />
        <rectangle fill="blue" />
        <rectangle fill="green" />
        <rectangle fill="orange" />
    </div>
</template>
```

<ClientOnly>
<Introduction-ComponentBasedAssets />
</ClientOnly>


## Sample Assets

Bytepath ships with sample assets you can use right out of the box. Lets try importing the bytepath balloon logo.
``` html
<script>
    import Bytepath from "bytepath";

    export default {
        components: {
            balloon: Bytepath.samples.assets.balloon,
        },
    }
</script>

<template>
    <div>
        <balloon color="red" />
        <balloon color="blue" />
        <balloon color="green" />
        <balloon color="orange" />
    </div>
</template>
```

<ClientOnly>
<Introduction-BalloonSample />
</ClientOnly>

<p class="tip success">Check out the full list of assets available HERE</p>

