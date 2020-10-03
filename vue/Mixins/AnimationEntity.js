import CalculatesTransformation from "./CalculatesTransformation";
import KeyframeAnimation from "./KeyframeAnimation";
import Position from "../../Helpers/Position";

export default {
    mixins: [ KeyframeAnimation, CalculatesTransformation ],
    props: {
        /**
         * if true debug info will be rendered for this component
         */
        debug:{
            type: Boolean,
            default: false,
        },

        /**
         * Add a filter to this vector
         */
        filter: {
            type: Object,
            default: null,
        },

        /**
         * position rect with {x,y,width,height}
         * If provided the camera will be moved to this location
         */
        camera: {
            type: Object,
            default: null
        },

        /**
         * Default color of this asset.
         *
         */
        color: {
            type: String,
            default: null,
        },

        /**
         *  MUST BE PASSED TO INNER VECTOR COMPONENT TO WORK
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
         */
        align: {
            type: String,
            default: null
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
         * MUST BE PASSED TO VECTOR TO WORK
         * If false the viewbox attribute will not be added
         */
        showViewbox: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        let positions = { default: new Position() };
        return {
            defaultColor: (this.color) ? this.color : "#FC0FC0",
            positions,
            defaultPosition: positions.default,
            defaultCamera: new Position(),
        };
    },

    watch: {
        color(){
            this.defaultColor = this.color;
        }
    }
}
