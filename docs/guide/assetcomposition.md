---
title: Asset Composition
type: bytepath
order: 3
---
## Asset Composition
Assets can be composed together in other components to create new assets. 

- AFTER YOUR ASSET RUNS ITS ANIMATIONS
- ANY TRANSFORMATIONS BY PARENT ASSETS AND SVG TAGS WILL BE APPLIED TO YOUR ASSET
- ALLOWS YOU TO MOVE ASSETS TOGETHER WHILE  


## Scene Composition
<div class="scrimba"><a href="https://scrimba.com/p/pXKqta/cEQe4SJ" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div>


## Vehicle Composition
<div class="scrimba"><a href="https://scrimba.com/p/pXKqta/cEQe4SJ" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div>

In the example below we import two sample assets, balloon and human. By including human as a slotted component on balloon, and binding the balloon's slot props, The human asset can use the balloon as a "vehicle", moving around the screen as a single asset. 
Try moving the sliders below and watch the assets move together. 
 
``` html
<script>
    import Bytepath from "bytepath";

    export default {
        data() {
            return { x: 50, y: 0, angle: 0 };
        },

        components: {
            balloon: Bytepath.samples.assets.balloon,
            human: Bytepath.samples.assets.human,
        }
    }
</script>

<template>
    <div>
        <input type="range" v-model.number="x" min="0" max="100">X = {{ x }}<br/>
        <input type="range" v-model.number="y" min="0" max="50">Y = {{ y }}<br/>
        <input type="range" v-model.number="angle" min="0" max="360">Angle = {{ angle }}<br/>

        <!-- Here human and balloon are two distinct assets -->
        <human :x="0"  />
        <balloon :x="25"  />

        <!-- Here balloon and human have been combined to make a single asset -->
        <balloon :x="x" :y="y" :a="angle" v-slot="balloon">
            <human :position="balloon.position" :sx="2" :sy="2" aspect="xMidYMax meet"/>
        </balloon>
    </div>
</template>
```

:::demo
<ClientOnly>
<ArtAsset-VehicleComposition />
</ClientOnly>
:::

<p class="tip success">I</p>

## How This Works

## Asset Slots

## Passing keyframe & slot props To Children components
The keyframe value that a component receives can be forwarded along to any child components that you want to animate. 
