export default function() {
    return {
        type: "default",
        name: "default",
        running: false,
        timesRepeated: 0,
        repeat: false,

        /**
         * These functions are named like such to prevent people from finding them with vue devtools and calling them.
         * Don't run these functions directl. Instead, use the computed animation function in your Component
         */
        // play
        _p: () => {},
        // stop
        _s: () => {},
        // pause
        _u: () => {},
        // restart
        _r: () => {},
    };
}



