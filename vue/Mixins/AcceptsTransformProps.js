import Position from "../../Helpers/Position";

export default {
    props: {
        /**
         * If not null we use this instead of the parent's projection matrix
         */
        matrix: {
            type: Object,
            default: null
        },

        /**
         * Pass in all position variables at once to make things easier
         */
        position: {
            type: Object,
            default() {
                return new Position();
            }
        },

        /**
         * X position
         */
        x: {
            type: Number,
            default: 0,
        },

        /**
         * Y Position
         */
        y: {
            type: Number,
            default: 0,
        },

        /**
         * Angle
         */
        a: {
            type: Number,
            default: 0,
        },

        /**
         * scaleX
         */
        sx: {
            type: Number,
            default: 0,
        },

        /**
         * scaleY
         */
        sy: {
            type: Number,
            default: 0,
        },

        /**
         * X position of center point
         */
        cx: {
            type: Number,
            default: null,
        },

        /**
         * Y position of center point
         */
        cy: {
            type: Number,
            default: null,
        },

        /**
         * The width of this asset. Optional if you want to use the size of the loaded asset
         */
        width: {
            default: null
        },

        /**
         * The height of this asset. Optional if you want to use the size of the loaded asset
         */
        height: {
            default: null
        },
    }
}
