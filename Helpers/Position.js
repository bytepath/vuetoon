export default class Position {
    /**
     * Theres gotta be a better way to do this?
     */
    constructor({
                    x = 0,
                    y = 0,
                    angle = 0,
                    scaleX = 0,
                    scaleY = 0,
                    skewX = 0,
                    skewY = 0,
                    width = null,
                    height = null,
                    centerX = null,
                    centerY = null,
                } = {}) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.skewX = skewX;
        this.skewY = skewY;
        this.width = width;
        this.height = height;
        this.centerX = centerX;
        this.centerY = centerY;
    }

    /**
     * Multiplies point (x, y) by the matrix representation of this position
     * @param x
     * @param y
     * @returns {DOMPoint}
     */
    multiplyPoint(x = 0, y = 0) {
        let point = new DOMPoint(x, y);
        let matrix = this.getDefaultTransformMatrix();
        point = point.matrixTransform(matrix);
        return new DOMPoint(point.x, point.y);
    }

    /**
     * Get the transformation matrix that represents this position
     * @param projection
     * @returns {DOMMatrix}
     */
    getDefaultTransformMatrix(projection = null) {
        let angle = (this.angle % 360);
        let x = this.x;
        let y = this.y;
        let skewX = this.skewX;
        let skewY = this.skewY;
        let cx = this.centerX;
        let cy = this.centerY;
        let scaleX = (this.scaleX === 0) ? 1 : this.scaleX;
        let scaleY = (this.scaleY === 0) ? 1 : this.scaleY;

        let retval = new DOMMatrix();

        /**
         *  PROJECTION
         *  Our starting matrix. Usually the transformation matrix of the parent node acquired with the
         *  getScreenCTM
         */
        let matrix;
        if(projection) {
            matrix = projection;
        } else {
            matrix = new DOMMatrix();
        }

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
    }

    toString() {
        return this.getDefaultTransformMatrix().toString();
    }
}
