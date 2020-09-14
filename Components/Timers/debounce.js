export default function debounce (fn, wait) {
    let t
    return function (...args) {
        //console.log("debounce called");
        clearTimeout(t)
        t = setTimeout(() => fn.apply(this, args), wait)
    }
}
