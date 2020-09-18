// Mixins
import transformer from "./vue/Mixins/CalculatesTransformation";
import keyframer from "./vue/Mixins/KeyframeAnimation";
import AnimationEntity from "./vue/Mixins/AnimationEntity";
import playbackTimer from "./vue/Mixins/PlaybackTimer";

// Timers
import clock from "./vue/Components/Timers/ClockTimer";
import scroll from "./vue/Components/Timers/ScrollTimer";
import responsiveScroll from "./vue/Components/Timers/ResponsiveScrollTimer";
import reset from "./vue/Components/Timers/KeyframeReset";

// DOM
import entityDiv from './vue/Components/Dom/EntityDiv';
import entity from './vue/Components/Entity';


// Animations
import bounce from './vue/Components/Animations/bounce';
import spin from './vue/Components/Animations/spin';

// Mutators
import acceleratesTranslation from './vue/Mutators/AcceleratesTranslation';


const Bytepath = {
    AnimationEntity,
    entity,
    mixins: {
        playbackTimer,
        transformer,
        keyframer,
    },

    timers:{
        clock,
        scroll,
        responsiveScroll,
        reset
    },

    animations: {
        bounce,
        spin,
    },

    mutators: {
        acceleratesTranslation,
    },

    dom:{
        entityDiv
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

export default Bytepath;
