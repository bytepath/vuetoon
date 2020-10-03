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
import vector from './vue/Components/SVG/Vector';

// Animations
import bounce from './Samples/Animations/Bounce';
import spin from './Samples/Animations/Spin';

// Factories
import CreateAsset from "./Factories/CreateAsset";
import CreateKeyframe from "./Factories/CreateKeyframe";

// Helpers
import Position from "./Helpers/Position";

// Sample Assets
import balloon from "./Samples/Assets/Balloon";
import human from "./Samples/Assets/Human/Human";
import pointyBackground from "./Samples/Scenes/Partials/PointyBackground";

// Sample Animations
import doABarrelRoll from "./Samples/Animations/DoABarrelRoll";

const Bytepath = {
    AnimationEntity,
    CreateAsset,
    CreateEntity: CreateAsset,
    CreateKeyframe,

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

    dom:{
        entityDiv
    },

    graphics: {
        vector,
    },

    samples: {
        animations: {
            doABarrelRoll
        },

        assets: {
            balloon,
            human,
        },
        scenes: {
            partials: {
                pointyBackground,
            }
        }
    },
}

export default Bytepath;
