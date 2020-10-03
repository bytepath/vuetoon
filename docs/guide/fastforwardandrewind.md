---
title: Fast Forward and Rewinding
type: bytepath
order: 10
---

- we need to ensure that each animation frame has completed before moving on to the next

- to rewind we need to make sure we end up in the exact same state as we were previous

- can do this by fast forwarding and rewinding

- rewind your animation is passed a tween class that forces the current frame to be the START frame of your animation. This will force the tween class to rewind the animation
- fastforward your animation is passed a tween class that forces the current frame to be the END frame of your animation. This will force the tween class to fast forward the animation
- reset function that you can call during repeats if you want to 
