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
import bounce from './vue/Components/Animations/Bounce';
import spin from './vue/Components/Animations/Spin';

// Factories
import CreateAsset from "./vue/Factories/CreateAsset";
import CreateKeyframe from "./vue/Factories/CreateKeyframe";

// Helpers
import Position from "./Helpers/Position";

// Sample Assets
import balloon from "./vue/Components/Animations/Assets/Balloon";
import animatedBalloon from "./vue/Components/Animations/Assets/AnimatedBalloon";
import human from "./vue/Components/Animations/Assets/Human/Human";
import pointyBackground from "./vue/Components/Animations/Scenes/Partials/PointyBackground";

// Sample Animations
import doABarrelRoll from "./vue/Components/Animations/Animations/DoABarrelRoll";

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
            animatedBalloon,
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
