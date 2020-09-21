/**
 * Returns the name of a file from a full pathname
 * "/images/underwater.svg?31a008e5511fac550851751860282ee2" Returns "images-underwater-svg"
 * @param file
 * @returns {String}
 */
export default function sanitizedPath(f) {
    return f.split('\\')
        .join("-")
        .split('/')
        .join("-")
        .split("?")
        .shift()
        .split(".")
        .join("-")
        .split("-")
        .slice(1)
        .join("-");
}
