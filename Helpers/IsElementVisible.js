/* eslint-disable */
import {fromObject, applyToPoint} from "transformation-matrix";

export default function isInViewport(element) {
    let retval = false;
    let viewport = null;
    let rect = element.getBoundingClientRect();

    if (element.farthestViewportElement) {
        viewport = element.farthestViewportElement.getBoundingClientRect();
    } else {
        viewport = document.querySelector("html").getBoundingClientRect();
    }


    let h = document.querySelector("html").getBoundingClientRect();
    let matrix = fromObject(element.getScreenCTM());
    let bbox = element.getBBox();

    // Convert bounding box to screen units then if any of the 4 rect points are inside the viewport
    // we are visible
    let viewportBBox = [
        applyToPoint(matrix, {x: bbox.x, y: bbox.y}),
        applyToPoint(matrix, {x: bbox.x + bbox.width, y: bbox.y}),
        applyToPoint(matrix, {x: bbox.x, y: bbox.y + bbox.height}),
        applyToPoint(matrix, {x: bbox.x + bbox.width, y: bbox.y + bbox.height}),
    ];

    for (let i = 0; i < viewportBBox.length; i++) {
        let x = viewportBBox[i].x;
        let y = viewportBBox[i].y;

        let collision = (
            x >= viewport.x &&
            x <= viewport.right &&
            y >= viewport.y &&
            y <= viewport.bottom
        );

        retval |= collision;

        // If we found a collision we dont need to check the rest
        if(retval) {
            break;
        }
    }

    return (retval == true);
}
