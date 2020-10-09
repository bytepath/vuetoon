/**
 * Code that handles computing transformation matricies goes here
 */
import Position from "../../Helpers/Position";
import { fromObject, applyToPoint } from "transformation-matrix";
import AcceptsTransformProps from "./AcceptsTransformProps";

export default {
    mixins: [ AcceptsTransformProps ],
    data() {
        return {
            dimensions: new Position(),
            animationDirty: true,

            /**
             * The values used to transform this asset
             */
            transform: new Position(),
        };
    },

    mounted() {
        this.animationDirty = true;
        this.computeTransformation();
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
        position: {
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
         * Returns the position this asset is using as center
         * @returns {{x: number, y: number}}
         */
        centerPosition() {
            // These variables are here to force vue to recompute center when these values change
            // eslint-disable-next-line
            let height = this.dimensions.height;
            // eslint-disable-next-line
            let width = this.dimensions.width;
            // eslint-disable-next-line
            let cx = this.cx;
            // eslint-disable-next-line
            let cy = this.cy;


            return this.getCenterPosition();
        },

        /**
         * The width of the asset
         */
        w(){
            if(this.position.width !== null) {
                return this.position.width;
            }
            else if(this.width !== null) {
                return this.width;
            }

            return this.dimensions.width;
        },

        /**
         * The height of the asset
         */
        h(){
            if(this.position.height !== null) {
                return this.position.height;
            }
            else if(this.height !== null) {
                return this.height;
            }

            return this.dimensions.height;
        },
    },

    methods: {
        /**
         * Computes actual position of entity
         * @returns Object
         */
        getPosition() {
            let center = this.centerPosition;

            return new Position({
                x: this.x + this.position.x,
                y: this.y + this.position.y,
                angle: this.a + this.position.angle,
                scaleX: this.sx + this.position.scaleX,
                scaleY: this.sy + this.position.scaleY,
                skewX: 0,
                skewY: 0,
                centerX: center.x + this.position.centerX,
                centerY: center.y + this.position.centerY,
                width: this.w  + this.position.width,
                height: this.h + this.position.height,
            });
        },

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
            let retval = { x:0, y:0 };

            // Center X
            if (this.cx !== null) { // Use Prop first
                retval.x = this.cx;
            } else if (this.position.centerX !== null) { // Then use position
                    retval.x = this.position.centerX;
            } else if (this.dimensions.centerX) { // If no position use half the width
                retval.x = this.dimensions.centerX;
            }

            // Center Y
            if (this.cy !== null) { // Use Prop first
                retval.y = this.cy;
            } else if (this.position.centerY !== null) { // Then use position
                retval.y = this.position.centerY;
            } else if (this.dimensions.centerY) { // If no position use half the height
                retval.y = this.dimensions.height / 2;
            }

            let pos = new Position(retval);

            if(this.$el) {
                /* eslint-disable */
                 let ctm = fromObject(this.$el.getCTM());
                 let screenUnits = applyToPoint(ctm, { x:pos.x, y:pos.y });
                //
                 pos.skewX = screenUnits.x;
                 pos.skewY = screenUnits.y;

                //pos.x = screenUnits.x;
                //pos.y = screenUnits.y;
            }

            return pos;
        },

        /**
         * Returns a matrix representing this entity
         * @returns {*|DOMMatrix}
         */
        getTransformation() {
            let matrix = this.matrix;

            // Check if the matrix prop is a matrix or a position
            if(this.matrix){
                if(matrix.constructor.name == "Position") {
                    matrix = matrix.matrix;
                }
            }

            return this.getPosition().toSVG(matrix, this.mutations);
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
    },
}
