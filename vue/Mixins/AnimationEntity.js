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
        }
    },
}
