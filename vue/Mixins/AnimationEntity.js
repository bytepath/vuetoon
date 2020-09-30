import CalculatesTransformation from "./CalculatesTransformation";
import KeyframeAnimation from "./KeyframeAnimation";

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
            type: Object,
            default: null,
        },
    },

    data() {
        return {
            defaultColor: (this.color) ? this.color : "#FC0FC0",
        };
    },

    watch: {
        color(){
            this.defaultColor = this.color;
        }
    }
}
