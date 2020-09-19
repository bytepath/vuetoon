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
            type: Number,
            default: null
        },

        /**
         * The height of this asset. Optional if you want to use the size of the loaded asset
         */
        height: {
            type: Number,
            default: null
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
                width: null,
                height: null,
                centerX: null,
                centerY: null,
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

        /**
         * Returns the position this asset is using as center
         * @returns {{x: number, y: number}}
         */
        centerPosition() {
            let height = this.position.height;
            let width = this.position.width;
            let cx = this.cx;
            let cy = this.cy;
            return this.getCenterPosition();
        },

        /**
         * The width of the asset
         */
        w(){
            return (this.width) ? this.width : this.position.width;
        },

        /**
         * The height of the asset
         */
        h(){
            return (this.height) ? this.height : this.position.height;
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
         * Computes actual position of entity
         * @returns Object
         */
        getPosition() {
            let center = this.centerPosition;
            let retval = {
                x: this.position.x + this.x,
                y: this.position.y + this.y,
                angle: this.position.angle + this.a,
                scaleX: this.position.scaleX + this.sx,
                scaleY: this.position.scaleY + this.sy,
                skewX: this.position.skewX,
                skewY: this.position.skewY,
                centerX: center.x,
                centerY: center.y,
                width: this.w,
                height: this.h,
            };

            // Width and height props override internal values
            (this.width) ? retval.width = this.width : null;
            (this.height) ? retval.height = this.height : null;

            return retval;
        },

        /**
         * Returns the position this asset is using as center
         * @returns {{x: number, y: number}}
         */
        getCenterPosition(){
            // Defaults to 0,0
            let retval = {x: 0, y: 0,};

            // calculate asset dimensions if not already done
            if(this.position.width == null && this.position.height == null) {
                this.calculateAssetDimensions();
            }

            // Center X
            if (this.cx !== null) { // Use Prop first
                retval.x = this.cx;
            } else if (this.position.centerX !== null) { // If no prop value use position
                retval.x = this.position.centerX;
            } else if (this.position.width) { // If no position use half the width
                retval.x = this.position.width / 2;
            }

            // Center Y
            if (this.cy !== null) { // Use Prop first
                retval.y = this.cy;
            } else if (this.position.centerY !== null) { // If no prop value use position
                retval.y = this.position.centerY;
            } else if (this.position.height) { // If no position use half the height
                retval.y = this.position.height / 2;
            }

            return retval;
        },

        /**
         * Calculates the dimensions of this asset and if successful sets the position width/height properties
         */
        calculateAssetDimensions(){
            let dimensions = this.getAssetDimensions();

            this.position.width = dimensions.width;
            this.position.height = dimensions.height;
        },

        /**
         * Returns a object representing the bounding box of this object
         * @returns { width, height }
         */
        getAssetDimensions() {
            let retval = { width: null, height: null }
            let hasBBox = (typeof ((this.$el) ? this.$el.getBBox : null) == 'function');
            if(this.$el && hasBBox) {
                let box = this.$el.getBBox();
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
            return (this.matrix) ? this.matrix : new DOMMatrix();
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
