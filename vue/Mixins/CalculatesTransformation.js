/**
 * Code that handles computing transformation matricies goes here
 */
import Position from "../../Helpers/Position";

export default {
    props: {
        /**
         * If not null we use this instead of the parent's projection matrix
         */
        matrix: {
            type: DOMMatrix,
            default: null
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
            type: Number|String,
            default: null
        },

        /**
         * The height of this asset. Optional if you want to use the size of the loaded asset
         */
        height: {
            type: Number|String,
            default: null
        },
    },

    data() {
        let dimensions = new Position();

        return {
            dimensions,
            transform: new DOMMatrix(),
            mutations: {},
            animationDirty: true,
        };
    },

    mounted() {
        this.animationDirty = true;
        window.addEventListener('DOMContentLoaded', (event) => {
            this.computeTransformation();
        });
    },

    watch: {
        /**
         * If we change position either internally or via prop we need to
         * mark as dirty so we re calculate the transform matrix
         */
        dimensions: {
            handler() {
                this.positionChanged();
            }, deep: true
        },
        x() {
            this.positionChanged();
        },
        y() {
            this.positionChanged();
        },
        a() {
            this.positionChanged();
        },
        sx() {
            this.positionChanged();
        },
        sy() {
            this.positionChanged();
        },
        matrix() {
            this.positionChanged();
        },
    },

    computed: {

        /**
         * Computes actual position of entity
         * @returns Object
         */
        position() {
            let center = this.centerPosition;
            return new Position({
                x: this.x,
                y: this.y,
                angle: this.a,
                scaleX: this.sx,
                scaleY: this.sy,
                skewX: 0,
                skewY: 0,
                centerX: center.x,
                centerY: center.y,
                width: this.w,
                height: this.h,
            });
        },

        /**
         * Returns the position this asset is using as center
         * @returns {{x: number, y: number}}
         */
        centerPosition() {
            let height = this.dimensions.height;
            let width = this.dimensions.width;
            let cx = this.cx;
            let cy = this.cy;
            return this.getCenterPosition();
        },

        /**
         * The width of the asset
         */
        w(){
            return (this.width) ? this.width : this.dimensions.width;
        },

        /**
         * The height of the asset
         */
        h(){
            return (this.height) ? this.height : this.dimensions.height;
        },

        // /**
        //  * Prints the current transformation matrix to the vue dev tools
        //  * @returns {*}
        //  */
        // debugTransform() {
        //     return this.transform.toString();
        // },
    },

    methods: {

        /**
         * Called when the position variable or position props change
         */
        positionChanged() {
            this.animationDirty = true;
            requestAnimationFrame(this.computeTransformation);
        },

        /**
         * Returns the position this asset is using as center
         * @returns {{x: number, y: number}}
         */
        getCenterPosition(){
            // Defaults to 0,0
            let retval = {x: 0, y: 0,};

            // Center X
            if (this.cx !== null) { // Use Prop first
                retval.x = this.cx;
            } else if (this.dimensions.width) { // If no position use half the width
                retval.x = this.dimensions.width / 2;
            }

            // Center Y
            if (this.cy !== null) { // Use Prop first
                retval.y = this.cy;
            } else if (this.dimensions.height) { // If no position use half the height
                retval.y = this.dimensions.height / 2;
            }

            return retval;
        },

        /**
         * Calculates the dimensions of this asset and if successful sets the position width/height properties
         */
        calculateAssetDimensions(){
            let dimensions = this.getAssetDimensions();

            this.dimensions.width = dimensions.width;
            this.dimensions.height = dimensions.height;
        },

        /**
         * Returns a object representing the bounding box of this object
         * @returns { width, height }
         */
        getAssetDimensions() {
            let retval = new Position();
            let hasBBox = (typeof ((this.$el) ? this.$el.getBBox : null) == 'function');
            let box = null;
            if(this.$el && hasBBox) {
                box = this.$el.getBBox();
                if(box.width !== 0) {
                    retval.width = box.width;
                }

                if(box.height !== 0) {
                    retval.height = box.height;
                }
            }

            return retval;
        },

        /**
         * Returns a matrix representing this entity
         * @returns {*|DOMMatrix}
         */
        getTransformation() {
            // calculate asset dimensions if not already done
            if(this.dimensions.width == null && this.dimensions.height == null) {
                this.calculateAssetDimensions();
            }

            let m = this.position.getDefaultTransformMatrix();

            // compute any mutator matricies we have specified
            Object.values(this.mutations).forEach((mutation) => {
                m = mutation.apply(this, [m]);
            });

            return m;
        },

        /**
         * Called by request animation frame. We check for dirty changes before running this as computing matricies is
         * a slow operation that we want to avoid if we can
         */
        computeTransformation() {
            if (this.animationDirty) {
                this.transform = this.getTransformation();
                this.animationDirty = false;
            }
        },

        /**
         * Register a mutation function that will be applied to the transformation of this component
         * @param mutation
         */
        registerMutation(mutation) {
            if (this._debug) {
                //console.log("Registering mutation", mutation.name);
            }

            this.mutations[mutation.name] = mutation;
        },
    },
}
