---
title: Keyframe Modifiers
type: bytepath
order: 12
---
## KeyframeDelay delays keyframe start until keyframe >= :start prop

<<< @/../bytepath-io/src/examples/KeyframeModifiers/Delay.vue

:::demo delay-modifier 0 2500
:::

## KeyframeRepeat will return keyframe to 0 at frame :repeat

<<< @/../bytepath-io/src/examples/KeyframeModifiers/Repeat.vue

:::demo repeat-modifier 0 2500
:::

## KeyframeVisible resets keyframe if asset goes off screen

<<< @/../bytepath-io/src/examples/KeyframeModifiers/Hidden.vue

:::demo hidden-modifier 0 5000
:::

# Keyframe modifiers can be chained together

<<< @/../bytepath-io/src/examples/KeyframeModifiers/DelayHiddenChain.vue

:::demo delay-hidden-chain 0 5000
:::
