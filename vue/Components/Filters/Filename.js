/**
 * Returns the name of a file from a full pathname
 * "/images/underwater.svg?31a008e5511fac550851751860282ee2" Returns "underwater"
 * @param file
 * @returns {String}
 */
export default function nameFromPath(file) {
    return file.split('\\').pop().split('/').pop().split(".").shift();
}
