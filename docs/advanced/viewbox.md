---
title: Viewbox behaviour
---

# vectors should set overflow visible by default"

#Viewbox behaviour

## When Vector is the top level svg element
    - it shows viewport if show-viewport = null
    - shows viewport if show-viewport = true
    - does NOT show viewport if show-viewport=false

    - we also set the width and height values based on what we found from getBBox and display those in the 
    - svg tag as well unless they have been overridden
