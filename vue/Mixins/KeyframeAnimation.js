import AnimationDataFactory from "../../Animation/AnimationDataFactory";
import Animation from "../../Animation/Animation";
//import IsElementVisible from "../../Helpers/IsElementVisible";

export default {
    props: {
        // The current playback frame of the animation
        keyframe: {
            type: Number,
            default: 0
        },

        // The name of the animation we want to run
        anim: {
            type: String | Object,
            default: null
        },

        // Force the animation to continually repeat
        repeat: {
            type: Boolean|String,
            default: false,
        }
    },

    data() {
        return {
            // If true this element has been visible on the screen at least once
            wasVisible: false,
        };
    },

    mounted() {
        this.keyframeChanged(this.keyframe);
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
            if (this.anim !== null) {
                /* eslint-disable-next-line */
                if (typeof this.anim == "object") {
                    return this.loadAnimation(this.anim);
                }
            }

            if (this.animations) {
                // Check to see if the animation controls have specified an animation to play
                if (this.anim) {
                    // Check to see if this entity has an animation with the name in the controls
                    if (Object.prototype.hasOwnProperty.call(this.animations, this.anim)) {
                        return this.loadAnimation(this.anim);
                    }
                }

                // Check if there is a default animation
                if (Object.prototype.hasOwnProperty.call(this.animations, 'default')) {
                    return this.loadAnimation('default');
                }
            }

            return null;
        },
    },

    methods: {
        shouldCalculateVisibility(){
            return true;
        },

        loadAnimation(anim) {
            if(anim === null) return;
            if(typeof anim === "string" && this.animations){
                if(this.animations[anim] == null) return null;

                let actions = AnimationDataFactory.createFromUserAnimation(anim, this.animations[anim]);
                return new Animation(this.anim, actions, this.repeat);
            }

            // This is an animation passed to us by a parent component
            let actions = AnimationDataFactory.createFromUserAnimation('renderless', anim);
            return new Animation('renderless', actions, this.repeat);
        },

        keyframeChanged(keyframe) {
            if (this.animation) {

                // // If this is a repeat on hidden we check if element is visible here
                // if(this.repeat === 'hidden') {
                //     console.log("checking if hidden.... previouslyVisible:", this.wasVisible);
                //     let isVisible = IsElementVisible(this.$el);
                //     this.wasVisible = ((this.wasVisible | isVisible) == true);
                //
                //     // If element is not on screen, but was previously on screen, set the current
                //     // frame as final which will cause the animation to repeat
                //     if((!isVisible) && (this.wasVisible)) {
                //         console.log("should repeat", this.wasVisible );
                //         this.animation.setFinalFrame(keyframe, this);
                //
                //     }
                // }

                this.animation.computeFrame(keyframe, this);
            }
        },
    },
}
