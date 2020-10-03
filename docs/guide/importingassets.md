---
title: Importing Art Assets
---
## Loading SVG Files

<div class="scrimba"><a href="" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div>
We can import art assets from normal SVG files created by any illustration program. Just profile a path to the file to the :src prop of the &lt;vector&gt; component and bytepath will handle loading this file for you


<br />

## Files loaded only once
Bytepath will only make a request for an individual file once then cache the returned result. This means that if multiple assets in your application use the same image, we dont need to make multiple requests to the server

## Loading Individual layers

<div class="scrimba"><a href="" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div>
Bytepath can pull individual layers out of your SVG files to use as discrete assets. just pass the XML tag id of the layer you want to load to the :layer prop of the vector component.
This means that artists can simply draw all the assets for your animation in a single file, with each piece of the scene being it's own layer. 
Example: If you were making a highway scene you could draw all of the different cars in a single file, then pull out each car as individual assets.  

## Use Webpack to manage your image files
- If you are using webpack (if you used the suggested vue CLI package to create your site then yes, you are) the suggested way of loading files is to import them in your vue files, then pass the 
imported file to the src attribute. By doing it this way not only is your code cleaner but webpack will "tree shake" your images, meaning your final bundle only includes what you need


## Notes about loading files
    - vector does not load the file instead emitting a request to someone else to handle this
    - vector does not make a copy of the file instead, uses the SVG &lt;use&gt; and &lt;symbol&gt;tag to handle making a clone of an asset in the shadow root of the DOM
    - if you don't have an asset loader middleware files wont load  
