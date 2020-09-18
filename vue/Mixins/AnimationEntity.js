import CalculatesTransformation from "./CalculatesTransformation";
import KeyframeAnimation from "./KeyframeAnimation";

export default {
    mixins: [ KeyframeAnimation, CalculatesTransformation ],
    name: 'entity',
    props: {},
}
