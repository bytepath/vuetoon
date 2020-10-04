import KeyframeAnimation from "./KeyframeAnimation";
import Position from "../../Helpers/Position";

export default {
    mixins: [ KeyframeAnimation ],
    props: {
        /**
         * Default color of this asset.
         *
         */
        color: {
            type: String,
            default: null,
        },
    },

    data() {
        let positions = { default: new Position() };
        return {
            defaultColor: (this.color) ? this.color : "#FC0FC0",
            positions,
            defaultPosition: positions.default,
            defaultCamera: new Position(),
        };
    },

    watch: {
        color(){
            this.defaultColor = this.color;
        }
    }
}
