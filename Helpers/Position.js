/* eslint-disable */
import {scale, rotateDEG, translate, compose, inverse, toSVG, applyToPoint } from 'transformation-matrix';

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
     * Returns the inverse of the matrix that represents this position
     * @returns {DOMMatrix}
     */
    get inverse() {
        return inverse(this.getDefaultTransformMatrix());
    }

    /**
     * Multiplies point (x, y) by the matrix representation of this position
     * @param x
     * @param y
     * @returns {DOMPoint}
     */
    multiplyPoint(x = 0, y = 0) {
        return applyToPoint(this.getDefaultTransformMatrix(), { x, y });
    }

    /**
     * Get the transformation matrix that represents this position
     * @param projection
     * @returns {DOMMatrix}
     */
    getDefaultTransformMatrix(projection = null, mutations = {}) {
        let angle = (this.angle % 360);
        let x = this.x;
        let y = this.y;
        //let skewX = this.skewX;
        //let skewY = this.skewY;
        let cx = this.centerX;
        let cy = this.centerY;
        let scaleX = (this.scaleX === 0) ? 1 : this.scaleX;
        let scaleY = (this.scaleY === 0) ? 1 : this.scaleY;

        let args = [
            scale(scaleX, scaleY, (cx + x), (cy + y)),
            rotateDEG(angle, (cx + x), (cy + y)),
            translate(x,y)
        ];

        // Add the projection matrix if one was provided
        if(projection){
            args.unshift(projection);
        }

        return compose.apply(null, args);
    }

    transformedCenter(){
        return applyToPoint(this.getDefaultTransformMatrix(), [this.centerX, this.centerY]);
    }

    toViewbox() {
        if(this.width !== 0 && this.height !== 0) {
            return `${this.x} ${this.y} ${this.width} ${this.height}`;
        }

        return null;
    }

    toString() {
        return toSVG(this.getDefaultTransformMatrix());
    }

    toSVG(projection = null, mutations = {}){
        return toSVG(this.getDefaultTransformMatrix(projection, mutations));
    }
}
