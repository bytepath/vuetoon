/* eslint-disable */
import {scale, rotateDEG, translate, compose, identity, toSVG, applyToPoint } from 'transformation-matrix';

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
     * Returns a matrix that represents this position
     * @returns {DOMMatrix}
     */
    get matrix() {
        return this.getDefaultTransformMatrix();
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
        //let retval = identity;

        let angle = (this.angle % 360);
        let x = this.x;
        let y = this.y;
        //let skewX = this.skewX;
        //let skewY = this.skewY;
        let cx = this.centerX;
        let cy = this.centerY;
        let scaleX = (this.scaleX === 0) ? 1 : this.scaleX;
        let scaleY = (this.scaleY === 0) ? 1 : this.scaleY;

        console.log('ham ham', cx, cy);
        return compose(scale(scaleX, scaleY, (cx + x), (cy + y)), rotateDEG(angle, (cx + x), (cy + y)), translate(x,y));
    }

    transformedCenter(){
        return applyToPoint(this.getDefaultTransformMatrix(), [this.centerX, this.centerY]);
    }

    toString() {
        return toSVG(this.getDefaultTransformMatrix());
    }
}
