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
            default: "default"
        },

        // Force the animation to continually repeat
        repeat: {
            type: Boolean,
            default: false,
        }
    },

    data(){
        return {

        };
    },

    watch:{
        keyframe(){
            this.keyframeChanged(this.keyframe);
        },
    },

    computed:{
        animations() {
            return {
                default: [],
            };
        },

        animation(){
            // Check to see if the animation controls have specified an animation to play
            if(this.anim) {
                // Check to see if this entity has an animation with the name in the controls
                if (Object.prototype.hasOwnProperty.call(this.animations, this.anim)) {
                    console.log("new animation", this.anim, this.animations);
                    return new Animation(this.anim, this.loadAnimation(this.anim), this.repeat);
                }
            }

            return new Animation('default', this.loadAnimation(this.animations.default), this.repeat);
        },
    },

    methods: {
        loadAnimation(anim){
            console.log("loading animation", anim, this.animations[anim]);
            return AnimationDataFactory.createFromUserAnimation(anim, this.animations[anim]);
        },

        keyframeChanged(keyframe) {
            this.animation.computeFrame(keyframe, this);
        },
    },
}
