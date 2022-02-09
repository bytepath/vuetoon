---
title: Combining Assets To Make New Assets
type: bytepath
order: 3
---
## Asset Composition
Assets can be composed together in other components to create new assets. 

- AFTER YOUR ASSET RUNS ITS ANIMATIONS
- ANY TRANSFORMATIONS BY PARENT ASSETS AND SVG TAGS WILL BE APPLIED TO YOUR ASSET
- ALLOWS YOU TO MOVE ASSETS TOGETHER WHILE  


## Scene Composition


## Vehicle Composition

In the example below we import two sample assets, balloon and human. By including human as a slotted component on balloon, and binding the balloon's slot props, The human asset can use the balloon as a "vehicle", moving around the screen as a single asset. 
Try moving the sliders below and watch the assets move together. 
 
<<< @/../bytepath-io/src/examples/ArtAsset/VehicleComposition.vue

:::demo asset-composition
:::


## How This Works

## Asset Slots

## Passing keyframe & slot props To Children components
The keyframe value that a component receives can be forwarded along to any child components that you want to animate. 
