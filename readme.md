## Bytepath - A VueJS Based Vector Graphics & Animation Framework

![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)
![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)


#### *Bytepath consists of two main modules*
## ***Keyframer*** ##
- **A framework for building keyframed animations in your Javascript Apps**
	- **Simple to write** Animations are represented using simple Javascript functions that you already know how to write. Anything you can do in javascript, you can do here. 
	
	- **No thinking required** Bytepath provides a handy tween object that will handle the hard part of transitioning from one frame to the next.  All you need to know is where you want your animation to start, and where you want it to end up. Bytepath handles the hard work for you so you can focus on the creative process
	
	- **Reusable** Animations are self contained Javascript objects that can be tested in isolation or shared with the world
	
	- **Reactive** Animation playback is as simple as providing an integer to the :keyframe prop of your animation components. Animations will automatically update and re-render using the new frame position. Connect the :keyframe prop to one of the provided Playback Timers to turn your vector graphics into interactive animations. 
	
	- **Simple Playback** Animations are played using Bytepath playback timers. Playback timers handle the playback speed and FPS of your animations and thanks to the reactivity provided by vue, can be connected to anything in your application that can output a number. 
		Out of the box, bytepath provides adapters for 
		- Clock: A Stopwatch that pings at a set interval. Think setTimeout() but for animation
		- Scroll:  Ties playback to page scroll making your animations play at the speed that the user scrolls with their finger or mousewheel. 
		- Responsive Scroll: Similar to 'Scroll' but the output frame takes into account the size of your screen ensuring animations play back as expected on all devices
			
	- **Custom Playback Timers** If the provided playback timer components aren't what you are looking for, Bytepath makes it dead simple to create a custom adapter to fit your use case. 			

	- **Component based** Animations can be part of your art assets or consumed as renderless components (or both!).  Whatever works better for your particular use case 

## ***Transformer*** ##
- **A framework for building component based vector graphics**
	- **Use tools that artists already know how to use -** Art assets are built using tools artists are already familiar with such as Adobe Illustrator, Inkscape, and Affinity Designer.

	- **Reactive**: Instantly Scale, Rotate, Translate, and Skew on screen graphics by modifying prop values. Art assets will automatically redraw after any change of position

	- **Reusable -** Art assets are single file VueJS components allowing you to easily re-use assets in future projects or package them up and share them with the world 

	- **Modular -** Assets are normal Vue components meaning you can swap in and out various sub sections using slots. Mix and match various assets to create an unlimited number of potential assets from the art you aleady have
		- A "Person" asset could be built using a component containing slots for arms, legs, head and body allowing you to create an unlimited number of characters without having to re-write any code. 
		- A "Vehicle" asset could be built using a component containing slots for wheels, and body allowing you to create an unlimited number of trucks, cars, motorcycles, etc that all share the same basic properties of a vehicle. 
	- **Experimental DOM Support** Transformer can be used on normal DOM Elements by passing its render output to the CSS "transform" property for that element.
	- **VueJS For Graphics** The same skills you've perfected to make awesome websites can now be used to make cutting edge vector graphics. Anything you can do in vue, you can do here (slots, $emit, Mouse/Keyboard Events, props, mixins, etc)


# Installation
 Install Bytepath using NPM

	npm install bytepath        


# Quick Start
Bytepath works by combining the VueJS with the powerful, but complicated, SVG Vector Graphics Standard. 
SVG Images are represented with XML-like tags just like the HTML spec meaning we can modularize our SVG art assets into modular single file art assets (refered to as animation entities from here on out) just like we would do for web components.

### Use props to reactively transform any Bytepath element
Scale, Translate, and Rotate your Bytepath entities simply by modifying the listed props below. Bytepath will automatically re-render your asset after any modifications to these values

| Prop | Description                    |
| ------------- | ------------------------------ |
| `:x`      | X position       |
| `:y`   | Y Position     |
| `:a`   | Rotation angle (degrees)     |
| `:sx`   | Scale horizontally     |
| `:sy`   | Scale vertically      |
| `:cx`   | Center X Position     |
| `:cy`   | Center Y Position     |
| `:width`   | Asset Width     |
| `:height`   | Asset Height    |
| `:matrix`   | The projection matrix for this element. Used to pass animations from renderless components    |

### Using the premade entity component
Bytepath provides you with a pre built animation entity you can use to get started with your projects. In a new Vue component, import bytepath then add the entity component to its list of external components.

```html
<template>
    <div style="padding: 12px;">
        <entity :x="200" :y="300">X=200 Y=300</entity><br/>
        <entity :a="20">Angle=20</entity><br/>
        <entity :a="50" :sx="3.5" :sy="1.5">Angle=50 ScaleX=3.5 ScaleY=1.5</entity>
    </div>
</template>

<script>
    import bytepath from "bytepath";

    export default {
        components:{
            entity: bytepath.components.entity
        }
    }
</script>
```

### Creating custom Animation Entities
- Bytepath Animation Entities are normal VueJS Components with the provided bytepath.AnimationEntity mixin applied.

- Anything available to a Vue web component is also available to use with a Bytepath Animation Entity (Props, for example).

- The template of an Animation Entity will contain a valid SVG tag that your browser can render as a standalone asset. 

- When creating custom components, you must manually add the transform property to your template using ' :transform="transform". Normally, the transform should be added to either the SVG tag itself or the root element below the SVG tag.

- Once an image has been added to a single file component, we can render as many copies of the asset as we want by adding another tag (in this case <rectangle />). Each tag can be scaled, rotated, and translated independently from the rest of the scene

- Assets are made up of *multiple* Animation entities composed together using single file components. If a part of your asset animates independently from the main (Example: A characters arm's or legs), this sub asset should be it's own single file component.. 

- The SVG specification allows us to nest as many SVG tags as we want, We can use this feature to compose larger scenes made up of smaller, reusable art assets, that we can just drop into any scene.

```html
<!-- CustomRectangle.vue -->
<template>
        <svg xmlns="http://www.w3.org/2000/svg">
            <g :transform="transform">
                <rect :fill="fill" x="0" y="0" width="50" height="50" />
			<g>
        </svg>
</template>

<script>
    import bytepath from "bytepath";

    export default {
		props:{
			fill: {
				type: String,
				default: "red",
			},
		},
		mixins: [ bytepath.AnimationEntity ],
    }
</script>
```


```html
<!-- RectangleScene.vue -->
<template>
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1300 500">
        <g>
			<!-- Draws our custom entity at [200, 100] with red fill -->
            <custom-rectangle fill="red" :x="200" :y="100" />
			
			<!-- Draws our custom entity at [200, 100] with green fill -->
            <custom-rectangle fill="green" :x="300"  />
			
			<!-- Draws our custom entity at [200, 100] with blue fill -->
            <custom-rectangle fill="blue" :x="100" :y="50" />
        </g>
    </svg>
</template>

<script>
    import CustomRectangle from "./CustomRectangle";

    export default {
        components: {
            CustomRectangle,
        },
    }
</script>
```


### Animating Art Assets
Bytepath uses the powerful reactivity system of VueJS to make building custom animations simple and fun

####  Animation Props
Bytepath adds the following props to your vue component


| Prop | Type | Default | Description                    |
| ------------- | -- | --- | ------------------------------ |
| `:keyframe` | Integer | 0   | The current animation frame. Assets should pass the current animation frame down to it's children |
| `:anim`   | String | "default" | The Animation this component should be playing. If the provided animation doesn't exist, the default animation gets played instead     |
| `:repeat` | Boolean | false  | Should this animation restart when it finishes |

#### Reactive Animations
When the keyframe prop is updated, our animations will automatically compute the new animation position for us and re render the screen if necessary. 

#### Playback Timers
Animation playback is controlled by renderless components called Playback Timers. All these timers do is pass back an integer value that you can connect to the :keyframe prop of child components to progress through the animation. Since the :keyframe prop of our animation component will reactively update our animations when the frame value changes, we can use these timers to create fully interactive scenes that automatically re render themselves as needed. 

#### Pre Built Playback Timers
Bytepath ships with the following timers 
- Clock
	- Clock will iterate your keyframe value on a set interval. When you think of timers you are probably thinking of this
```html
<template>
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1300 500">
	<!-- keyframe will iterate at set interval -->   
        <clock v-slot="{ keyframe }" auto-play>
                <custom-rectangle :keyframe="keyframe" />
        </clock>
    </svg>
</template>

<script>
    import CustomRectangle from "./CustomRectangle";
    import bytepath from "bytepath";

    export default {
        components: {
            CustomRectangle,
            "clock": bytepath.timers.clock,
        },
    }
</script>
```

- Scroll
	- Scroll ties the keyframe value to the current scroll position of the page. This means that your animations will automatically play in forwards and reverse as the user scrolls around on your page.
```html
<template>
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1300 500">
	<!-- Keyframe will be iterate as the user scrolls down -->    
        <scroll v-slot="{ keyframe }" auto-play>
                <custom-rectangle :keyframe="keyframe" />
        </scroll>
    </svg>
</template>

<script>
    import CustomRectangle from "./CustomRectangle";
    import bytepath from "bytepath";

    export default {
        components: {
            CustomRectangle,
            "scroll": bytepath.timers.scroll,
        },
    }
</script>
```

#### Custom Playback Timers


#### Inline Animations
- If the animation you are building is relatively simple, you can just write your animation inline on the component tag itself. The template tag has access to the keyframe prop which tells us the current frame this animation should be displaying. 

```html
<!-- AnimatedRectangleScene.vue -->
<template>
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1300 500">
        <g>
		<!-- Move right from (200,100) to (500, 100) -->
		<!-- The modulo operator essentially acts as a "repeater" here -->
            <custom-rectangle fill="red" :x="(200 + keyframe) % 500" :y="100" />
			
		<!-- Move from (300, 0) to (300, 500) repeating -->
            <custom-rectangle fill="green" :x="300" :y="keyframe % 500"  />
						
		<!-- Frame 0 to 100 - Move Right  -->
		<!-- Frame 100 to infinity - Move Left  -->
            <custom-rectangle fill="green" :x="(keyframe < 100)? keyframe : 100 - keyframe" :y="200"  />
		
		<!-- Move left from 300, 50  to 0, 50 repeating -->
            <custom-rectangle fill="blue" :x="Math.abs((300 - keyframe) % 300)" :y="50" />
	    
		<!-- oscillate back and forth between -100, 0 and  100, 0 --> 
            <custom-rectangle fill="orange" :x="Math.sin(keyframe / 100) * 100" />
		
		<!-- paths around a circle of radius = 50 --> 
            <custom-rectangle fill="orange" :x="Math.sin(keyframe / 100) * 100" :y="Math.cos(keyframe / 100) * 100" />
        </g>
    </svg>
</template>

<script>
    import CustomRectangle from "./CustomRectangle";

    export default {
        components: {
            CustomRectangle,
        },
    }
</script>
```

#### Component Animations
Animations can be defined right in your single file components allowing you to create reusable vector graphics and interactive scenes. Animations are defined by creating a componentAnimations() function in the methods section of your vue component. 

The componentAnimations() function returns a javascript object with each key being the name of an animation that can be used by the asset by setting the :anim prop to the name of the animation

In the example below, we create a simple rectangle that has a custom animation called "tornado" that rotates the tornado around its center
```html
<template>
    <svg xmlns="http://www.w3.org/2000/svg">
        <g :transform="transform">
            <rect :fill="fill" width="50" height="50"/>
        </g>
    </svg>
</template>

<script>
    import { AnimationEntity } from "bytepath";

    export default {
        mixins: [AnimationEntity],
        props: {
            fill: {
                type: String,
                default: "red",
            },
        },

        methods: {
            componentAnimations() {
                return {
                    default: [],
                                         
                    tornado: [
                        /*
                          An animation is made up of an array of stages. Stages have 3 required fields
                          Start: The frame we start this stage
                          End: The frame that this stage is completed
                          handler: The function that is ran during each frame of the stage
                         */
                        {
                            name: 'Tornado Kick',
                            start: 0,
                            end: 250,
                            /**
                             * Rotates while moving to the right from frame 0 to 250
                             * @param context The vue component
                             * @param tween A helper function to handle the transition from start to finish value
                             */
                            handler(context, tween) {
                                context.position.x = tween.between(0, 250);
                                context.position.angle = tween.betweenFloat(0, 360);
                            }
                        },
                        {
                            name: 'Move back',
                            start: 251,
                            end: 500,
                            /**
                             * Moves back to the left and does not rotate
                             * @param context The vue component
                             * @param tween A helper function to handle the transition from start to finish value
                             */
                            handler(context, tween) {
                                context.position.x = tween.between(250, 0);
                            }
                        },                        
                    ]
                }
            }
        },
    }
</script>
```

#### Single file animations
As you see in the above example, animations can very quickly overwhelm your single 
file components, making them difficult to read and maintain. The easy solution to this is to store your animations as standalone javascript files and import them as necessary. As a nice added bonus you can now reuse your animations in any component. 

```html
<template>
    <svg xmlns="http://www.w3.org/2000/svg">
        <g :transform="transform">
            <rect :fill="fill" width="50" height="50"/>
        </g>
    </svg>
</template>

<script>
    import { AnimationEntity } from "bytepath";
    import TornadoAnim from "./TornadoAnim";
    
    export default {
        mixins: [AnimationEntity],
        props: {
            fill: {
                type: String,
                default: "red",
            },
        },

        methods: {
            componentAnimations() {
                return {
                    default: [],
                    tornado: TornadoAnim,
                }
            }
        },
    }
</script>
```

#### Animations as Renderless Components
Animations can also be made from renderless functions by passing the transform 
property to the slot value through the :matrix prop

```html
<!-- Tornado.vue -->
<template>
    <slot :matrix="transform" />
</template>

<script>
    import { AnimationEntity } from "bytepath";
    import TornadoAnim from "./TornadoAnim";
    export default {
        mixins: [AnimationEntity],
        
        methods: {
            componentAnimations() {
                return {
                    default: [],
                    tornado: TornadoAnim,
                }
            }
        },
    }
</script>
```


```html
<!-- SomeAnimation.vue -->
<template>
    <clock v-slot="clock" auto-play>
	<tornado :keyframe="clock.keyframe" v-slot="tornado">
	    <custom-rectangle :matrix="tornado.matrix" />	
        </tornado>		
    </clock>
</template>

<script>
    import bytepath from "bytepath";
    import Tornado from "./Tornado";
    import CustomRectangle from "./CustomRectangle";
	
    export default {
        mixins: [bytepath.AnimationEntity],
        components: {
		CustomRectangle,
		Tornado,
		clock: bytepath.timers.clock,
	},        
    }
</script>
```
