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
    },

    data() {
        let positions = { default: new Position() };
        return {
            defaultColor: (this.color) ? this.color : "#FC0FC0",
            positions,
            defaultPosition: positions.default,
        };
    },

    watch: {
        color(){
            this.defaultColor = this.color;
        }
    }
}
