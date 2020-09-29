import AnimationDataFactory from "../../Animation/AnimationDataFactory";
import Animation from "../../Animation/Animation";

export default {
    props: {
        // The current playback frame of the animation
        keyframe: {
            type: Number,
            default: 0
        },

        // The name of the animation we want to run
        anim: {
            type: String,
            default: null
        },

        // Force the animation to continually repeat
        repeat: {
            type: Boolean,
            default: false,
        }
    },

    data() {
        return {};
    },

    watch: {
        keyframe() {
            this.keyframeChanged(this.keyframe);
        },
    },

    computed: {
        animations() {
            return null;
        },

        animation() {
            if(this.animations) {
                // Check to see if the animation controls have specified an animation to play
                if (this.anim) {
                    // Check to see if this entity has an animation with the name in the controls
                    if (Object.prototype.hasOwnProperty.call(this.animations, this.anim)) {
                        console.log("new animation", this.anim, this.animations);
                        return this.loadAnimation(this.anim);
                    }
                }

                // Check if there is a default animation
                if (Object.prototype.hasOwnProperty.call(this.animations, 'default')) {
                    console.log("default anim");
                    return this.loadAnimation('default');
                }
            }

            console.log("has no animations", this);
            return null;
        },
    },

    methods: {
        loadAnimation(anim) {
            if(this.animations) {
                console.log("loading animation", anim, this.animations[anim]);
                let actions = AnimationDataFactory.createFromUserAnimation(anim, this.animations[anim]);
                return new Animation(this.anim, actions, this.repeat);
            }
        },

        keyframeChanged(keyframe) {
            if(this.animation) {
                this.animation.computeFrame(keyframe, this);
            }
        },
    },
}
