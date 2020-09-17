import AnimationDataFactory from "../../Animation/AnimationDataFactory";
import Animation from "../../Animation/Animation";

export default {
    mixins: [],
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
            animations: this.loadAnimation(),
        };
    },

    mounted() {
        // Initialize the animation at keyframe 0

    },

    watch:{
        keyframe(){
            this.keyframeChanged(this.keyframe);
        },
    },

    computed:{


        currentAnimation(){
            // Check to see if the animation controls have specified an animation to play
            if(this.anim) {
                // Check to see if this entity has an animation with the name in the controls
                if (Object.prototype.hasOwnProperty.call(this.animations, this.anim)) {
                    //console.log("new animation", this.anim);
                    return new Animation(this.anim, this.animations[this.anim], this.repeat);
                }
            }

            return new Animation('default', this.animations.default, this.repeat);
        },
    },

    methods: {
        loadAnimation(){
            let animations = {};
            Object.entries(this.componentAnimations()).forEach(([name, data]) => {
                let anim = AnimationDataFactory.createFromUserAnimation(name, data);
                animations[name] = anim;
                console.log("load animation found", name, anim);
            });

            return animations;
        },

        keyframeChanged(keyframe) {
            this.currentAnimation.computeFrame(keyframe, this);
        },

        /**
         * Returns a list of animations for this component.
         */
        componentAnimations(){
            return {
                default: [],
            };
        },
    },
}
