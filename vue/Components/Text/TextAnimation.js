import CalculateLetterDifferential from "../../../../../../bytepath/Components/Text/Utilities/CalculateLetterDifferential";
import WaveDifferential from "../../../../../../bytepath/Components/Text/Utilities/Calculations/WaveDifferential";

/**
 * TextAnimation.js
 * A mixin that adds helpful computed functions and methods to create Text Animations
 */
export default {
    props:{
        /**
         * The direction that the animation should go in
         */
        direction:{
            type: Number,
            default: -1,
        },

        /**
         * The force trying to pull you back to normal position
         */
        pull: {
            type: Number,
            default: 0.01
        },

        /**
         * The amount of time in frames between letter animations
         */
        interval:{
            type: Number,
            default: 5,
        },

        /**
         * Font Size
         */
        fontSize: {
            type: Number,
            default: 20
        },
    },

    data() {
        return {
            dy: "",
            dx: "",
        }
    },


    computed: {
        /**
         * The slot text of this component
         * @returns {string}
         */
        text() {
            if(this.$slots.default) {
                if(this.$slots.default){
                    return " " + this.$slots.default[0].text.replace(/(\r\n|\n|\r)/gm,"").trim();
                }
            }

            return "";
        },
    },

    methods:{
        /**
         * Letters will bounce one by one in a wave like pattern
         * @param direction
         * @param max
         * @param interval
         * @returns {function(...[*]=)}
         */
        waveText(direction = -1, interval = 20, pullback = 0.01 ) {
            return (keyframe) => {
                let waveCalculation = WaveDifferential(direction, pullback);
                let list = CalculateLetterDifferential(this.text, keyframe, interval, waveCalculation);
                this.dy = list.join(" ");

                if(list.length == 0){
                    return true;
                }

            }
        },

        /**
         * Same as waveText but horizontal
         * @param direction
         * @param max
         * @param interval
         * @returns {function(...[*]=)}
         */
        dashText(direction = -1, interval = 20, pullback = 0.01 ) {
            return (keyframe) => {
                let waveCalculation = WaveDifferential(direction, pullback);
                this.dx = CalculateLetterDifferential(this.text, keyframe, interval, waveCalculation).join(' ');
            }
        },

        /**
         * waveText and dashText at the same time
         * @param direction
         * @param max
         * @param interval
         * @returns {function(...[*]=)}
         */
        wavedashText(direction = -1, interval = 20, pullback = 0.01 ) {
            return (keyframe) => {
                let waveCalculation = WaveDifferential(direction, pullback);
                this.dx = CalculateLetterDifferential(this.text, keyframe, interval, waveCalculation).join(' ');
                this.dy = CalculateLetterDifferential(this.text, keyframe, interval, waveCalculation).join(' ');
            }
        },
    },
}
