import CalculatesTransformation from "./CalculatesTransformation";
import KeyframeAnimation from "./KeyframeAnimation";
import Entity from '../Components/Entity';

export default {
    mixins: [ KeyframeAnimation, CalculatesTransformation ],
    name: '_ae',
    props: {},
}
