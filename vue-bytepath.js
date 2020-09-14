import CalculatesTransformation from "./vue/Mixins/CalculatesTransformation";
import KeyframeAnimation from "./vue/Mixins/KeyframeAnimation";
import AnimationEntity from "./vue/Mixins/AnimationEntity";

// Timers
import clock from "./vue/Components/Timers/ClockTimer";
import scroll from "./vue/Components/Timers/ScrollTimer";
import responsiveScroll from "./vue/Components/Timers/ResponsiveScrollTimer";
import reset from "./vue/Components/Timers/KeyframeReset";

// DOM
import entity from './vue/Components/Dom/EntityDiv';

// Animations
import bounce from './vue/Components/Animations/bounce';
import spin from './vue/Components/Animations/spin';

// Mutators
import acceleratesTranslation from './vue/Mutators/AcceleratesTranslation';


export default {
    mixins: {
        transformer: CalculatesTransformation,
        keyframer: KeyframeAnimation,
    },

    timers:{
        clock,
        scroll,
        responsiveScroll,
        reset
    },

    dom:{
        entity
    },

    animations: {
        bounce,
        spin,
    },

    mutators: {
        acceleratesTranslation,
    },

    // The default init function
    init(modules = ['keyframer', 'transformer']){
        return this.initAsMixin();
    },

    // Force bytepath to init as mixin
    initAsMixin(modules = null) {
        return AnimationEntity;
    }
}
