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
import bounce from './vue/Components/Animations/Bounce';
import spin from './vue/Components/Animations/Spin';

// Mutators
import acceleratesTranslation from './vue/Mutators/AcceleratesTranslation';

// Factories
import CreateAsset from "./vue/Factories/CreateAsset";

// Helpers
import Position from "./Helpers/Position";

const Bytepath = {
    AnimationEntity,
    entity,
    CreateAsset,
    CreateEntity: CreateAsset,

    Position,
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

    graphics: {
        vector: entity,
    },
}

export default Bytepath;
