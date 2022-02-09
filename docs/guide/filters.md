---
title: Filters
---
Filters allow you to add special effects to your animiations  

Pass a filter to your animations through the :filter prop of an animation entity and it will automatically be loaded and the final rendered output of that
component (and any sub components) will pass through whatever filter you have provided before being rendered on screen

<<< @/../bytepath-io/src/examples/UsingFilters/FilterExample.vue

:::demo filter-example
:::


Filters accept all of the same props as an asset including keyframe and can also have animations, just like an asset can.

:::tip
Currently, Filters are more of a proof of concept to show that this is possible and creating your own filters is a bit of a chore.
Thus, for the current release, consider it not possible to create custom filters.
Expect this to improve in future releases
:::

