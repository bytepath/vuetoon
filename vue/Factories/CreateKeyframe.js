/**
 * Creates a keyframe object so you dont need to do it manually
 * @param start start frame
 * @param Int|Function end either the end frame in integer or the handler function
 * @param [handler] handler function
 * @returns {{handler: *, start: *, end: *}|{handler: *, start: *, end: null}}
 */
export default function keyframe(start = 0, end = null, handler = null) {
    console.log("number of arguments", arguments.length);

    // If we just pass in a handler func
    if(typeof start === "function"){
        return {
            start: 0,
            end: null,
            handler: start,
        };
    }

    // If we pass { start, handler }
    if(typeof end === "function"){
        return {
            start,
            end: null,
            handler: end,
        };
    }

    // If we pass { start, end, handler }
    return {
        start,
        end,
        handler,
    }
}

