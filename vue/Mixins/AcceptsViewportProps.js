export default {
    props: {
        /**
         * What to do if this entity goes outside it's clip boundaries. Default we just continue drawing it
         */
        overflow: {
            type: String,
            default: "visible"
        },

        /**
         * If false the viewbox attribute will not be added to the generated SVG tag
         */
        showViewbox: {
            type: Boolean,
            default: null,
        },

        /**
         *  The alignment strategy for this svg. Corresponds to an option available to the SVG preserveAspectRatio
         *  See https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio
         *
         *  Note: Meet and Slice are handled by the fit prop
         *  Options:
         *  null:  preserveAspectRatio="none"
         *  top-left: xMinYMin
         *  top: xMidYMin
         *  top-right: xMaxYMin
         *  left: xMinYMid
         *  middle: xMidYMid
         *  right: xMaxYMid
         *  bottom-left: xMinYMax
         *  bottom: xMidYMax
         *  bottom-right: xMaxYMax
         *  @testme
         *
         */
        align: {
            type: String,
            default: null,
        },

        /**
         *  Corresponds to meet or slice options of preserveAspectRatio
         *  See https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio
         *  if false we use Slice,  if true we use meet
         *  Options:
         *  null:  adds none string to preserveAspectRatio computed value
         *  true:   adds 'meet' to preserveAspectRatio computed value
         *  false:  adds 'slice' to preserveAspectRatio computed value
         *  @testme
         *
         */
        fit: {
            type: Boolean,
            default: false,
        },

        /**
         * position rect with {x,y,width,height}
         * If provided the camera will be moved to this location
         */
        camera: {
            type: Object,
            default: null
        }
    },
};
