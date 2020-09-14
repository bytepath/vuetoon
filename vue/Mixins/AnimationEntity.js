import CalculatesTransformation from "./CalculatesTransformation";
import KeyframeAnimation from "./KeyframeAnimation";

export default {
    mixins: [ KeyframeAnimation, CalculatesTransformation ],
    props: {
        name:{
            type: String,
            default() {
                return "bytepath-" + this._uid;
            },
        },
    },
}
