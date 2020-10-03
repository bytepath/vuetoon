- assets and scenes are both vectors

- a scene is just an asset with show-viewbox forced to true and width=auto height=auto so that it fits the size of the 
dom element you put it in

- assets are meant to be things you use inside a scene so they dont need a viewbox. we still calculate it though so we can turn it on whenever
NEED TEST 

- if you pass a camera to an asset you must show a viewbox as thats how the camera works. this is something to keep in mind
NEED TEST

- CreateAsset is for making assets 

- CreateScene for making scenes but all it does is force show viewbox and width height auto like mentioned earlier

- align prop.   used to align if you dont fit the scene   
        NEEDS A TEST
           MUST BE PASSED TO INNER VECTOR COMPONENT TO WORK
           The alignment strategy for this svg. Corresponds to an option available to the SVG preserveAspectRatio
           See https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio
         
           Note: Meet and Slice are handled by the fit prop
           Options:
           null:  preserveAspectRatio="none"
           top-left: xMinYMin
           top: xMidYMin
           top-right: xMaxYMin
           left: xMinYMid
           middle: xMidYMid
           right: xMaxYMid
           bottom-left: xMinYMax
           bottom: xMidYMax
           bottom-right: xMaxYMax
         
        align: {
            type: String,
            default: null
        },
        
- FIT PROP   change the alignment type from meet to slice. null for NONE type        
        NEEDS A TEST
        
        
