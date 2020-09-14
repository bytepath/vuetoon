import transformer from "./vue/Mixins/CalculatesTransformation";
import keyframer from "./vue/Mixins/KeyframeAnimation";
import AnimationEntity from "./vue/Mixins/AnimationEntity";

export default {
    mixins: {
        transformer,
        keyframer,
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
