/**
 * Code that handles computing transformation matricies goes here
 */
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
            default: 0,
        },

        /**
         * Y position of center point
         */
        cy: {
            type: Number,
            default: 0,
        },
    },

    data() {
        return {
            position: {
                x: 0,
                y: 0,
                angle: 0,
                scaleX: 0,
                scaleY: 0,
                skewX: 0,
                skewY: 0,
                width: 100,
                height: 100,
                centerX: 0,
                centerY: 0,
            },
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
        // debugTransform(){
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
         * Computes actual position of entity
         * @returns Object
         */
        getPosition() {
            let retval = {
                x: this.position.x + this.x,
                y: this.position.y + this.y,
                angle: this.position.angle + this.a,
                scaleX: this.position.scaleX + this.sx,
                scaleY: this.position.scaleY + this.sy,
                skewX: this.position.skewX,
                skewY: this.position.skewY,
                centerX: this.position.centerX + this.cx,
                centerY: this.position.centerY + this.cy,
            };
            return retval;
        },

        /**
         * Creates a transformation matrix using the provided position
         * @param position an object with position data (x, y, angle, scale, skew, etc)
         * @returns {DOMMatrix}
         */
        getDefaultTransformMatrix(position) {
            let angle = (position.angle % 360);
            let x = position.x;
            let y = position.y;
            let skewX = position.skewX;
            let skewY = position.skewY;
            let cx = position.centerX;
            let cy = position.centerY;
            let scaleX = (position.scaleX === 0) ? 1 : position.scaleX;
            let scaleY = (position.scaleY === 0) ? 1 : position.scaleY;

            /**
             *  PROJECTION
             *  Our starting matrix. Usually the transformation matrix of the parent node acquired with the
             *  getScreenCTM
             */
            let matrix = this.getProjectionMatrix();
            let retval = new DOMMatrix();
            let inverse = matrix.inverse();

            /**
             *  CENTER POINT
             *  Rotations always happen around the center point 0,0 So we need to temporarily move the entity around
             *  this point so that rotation, scale, and skew operations work as expected.
             */
            let center = new DOMMatrix();
            center = center.translate(cx, cy);



            /**
             *  SKEW
             */
            // let skew = new DOMMatrix();
            // skew = skew.skewX(skewX);
            // skew = skew.skewY(skewY);

            /**
             *  TRANSLATION
             *  We need to rotate scale and skew these values independent of the scene in order to translate
             *  to the correct place. We only need to compute these if the values aren't 0 so we can save
             *  some CPU time if we check for this
             */
            let translation = new DOMMatrix();
            let transformTranslation = new DOMMatrix();
            let point = new DOMPoint(x, y, 0);

            // take viewport size into account for translation
            // let m = this.$el.getScreenCTM();
            // let psc = 1 + (1 - m.d);

            if (scaleX !== 1 || scaleY !== 1) {
                transformTranslation.scaleSelf((1 / scaleX), (1 / scaleY));
            }

            // if(skewY + skewX !== 0){
            //     transformTranslation.skewXSelf(1/skewX);
            //     transformTranslation.skewYSelf(1/skewY);
            // }

            if (angle !== 0) {
                transformTranslation.rotateSelf(0, 0, 360 - angle);
            }

            point = point.matrixTransform(transformTranslation);
            translation = translation.translate(point.x, point.y);


            /**
             * TRANSFORM
             * Multiply all of these matricies together to get the final position
             */
                retval = retval.multiply(matrix);
                retval = retval.multiplySelf(center);
                retval.scaleSelf(scaleX, scaleY);
                retval.rotateSelf(0, 0, angle);
                retval.multiplySelf(center.inverse());

                retval.multiplySelf(translation);
                // retval = retval.multiply(inverse);
            return retval;
        },

        /**
         * Get the initial Matrix used to transform this entity
         * @returns {DOMMatrix}
         */
        getProjectionMatrix() {
            if (this.matrix) {
                return this.matrix;
            }

            //
            // if (this.$el) {
            //     if (this.$el.parentNode) {
            //         if (Object.prototype.hasOwnProperty.call(this.$el.parentNode, "getScreenCTM")) {
            //
            //             let ctm = this.$el.parentNode.getScreenCTM();
            //             // Some browsers return a depreciated SVGMatrix from getScreenCTM so we need to manually convert to a
            //             // DOMMatrix object
            //             let projection = new DOMMatrix([ctm.a, ctm.b, ctm.c, ctm.d, ctm.e, ctm.f]);
            //             return projection;
            //         }
            //     }
            // }

            return new DOMMatrix();
        },

        /**
         * Returns a matrix representing this entity
         * @returns {*|DOMMatrix}
         */
        getTransformation() {
            let position = this.getPosition();
            let m = this.getDefaultTransformMatrix(position);

            // compute any mutator matricies we have specified
            Object.values(this.mutations).forEach((mutation) => {
                m = mutation.apply(this, [m]);
            });

            return m;
        },

        /**
         * Returns a DOMRect representing the bounding box of this object
         * @returns {DOMRect}
         */
        getBoundingBox() {
            return this.$el.getBBox();
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
                console.log("Registering mutation", mutation.name);
            }

            this.mutations[mutation.name] = mutation;
        },
    },
}
