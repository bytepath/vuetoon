/**
 * Entity loader accepts src that is the path to the svg file containing the assets this entity wants.
 *
 * src is checked against a global list of downloaded svg files
 * if src not already downloaded, the entity that first requests it will download it
 * Any assets that ask for this file afterwards will use the version downloaded by the other component
 * There is a global variable called loadedAssets that holds the list of loaded assets
 * loadedAssets has the syntax { src: "id-that-loaded-this-file" } where src is a filename/url
 */
const axios = require('axios');
let inst = null;
import SrcToKey from "../vue/Components/Filters/SanitizedPath";

let loader = class SVGLoader {
    constructor() {
        this.loadedAssets = {};
    }

    /**
     * Check loadedAssets variable to see if someone else has already loaded the requested file. If so, we can
     * use the <use> tag of the SVG spec to clone the tag with id = loadedAssets[this.src]
     */
    fileIsLoaded(src) {
        let result = Object.prototype.hasOwnProperty.call(this.loadedAssets, SrcToKey(src));
        return result;
    }

    /**
     * Remove asset from suste,
     */
    deleteAsset(src) {
        delete this.loadedAssets[SrcToKey(src)];
    }

    /**
     * Load file from URL
     * @param src file url
     * @param asset the ID responsible for drawing this file to the dom
     * @returns { Promise }
     */
    load(src, asset = null) {
        let file = SrcToKey(src);
        if(!this.fileIsLoaded(src)) {
            //console.log(file, "not loaded yet");
            let promise = axios.get(src)
                .then((response) => {
                    // Set this :src file as downloaded in the global list
                    this.processLoadedImage(response.data, src, asset);
                })
                .catch((error) => console.log('asset err', error));

            this.loadedAssets[file] = {id: asset, promise, data: null, viewBox: null, layers: {}};
        }

        // If the file was loaded without an asset id it has not been rendered on the screen. Set the ID to this asset
        if(this.loadedAssets[file].id == null && asset !== null) {
            //console.log("found null asset id setting to ", asset, file);
            this.loadedAssets[file].id = asset;
        }

        return this.loadedAssets[file].promise;
    }

    /**
     * Ensures unique IDs in the imported SVG by appending :asset to EVERY id inside the svg
     * @param {String} html The representing a single element
     * @return {Element}
     */
    processLoadedImage(svg, src, asset) {
        // Convert the string into dom elements
        var template = document.createElement('template');
        template.innerHTML = svg;

        // Remove the viewbox but make a copy of it in the global asset
        let viewBox = template.content.firstElementChild.getAttribute("viewBox");
        if (viewBox !== null) {
            const arr = viewBox.split(/[ ,]+/);
            viewBox = {
                x: arr[0],
                y: arr[1],
                width: arr[2],
                height: arr[3]
            };
        }

        let file = this.loadedAssets[SrcToKey(src)];
        let rawLayers = [];
        let layers = {};
        file.viewBox = viewBox;
        template.content.firstElementChild.removeAttribute('viewBox');

        // Find all of the layers in this image
        template.content.firstElementChild.querySelectorAll("g[id]").forEach((element) => {
            rawLayers.push(element.id);

            // Ensure this ID is unique in the dom by adding the asset tag
            element.setAttribute("id", asset + element.id);
        });

        // Filter layers we don't want
        rawLayers.filter((layer) => (layer.charAt(0) !== "_")).map((layer) => {
            layers[layer] = null;
        });

        // Save a copy of the layers we found in this image in the global var
        file.layers = layers;

        // Save the processed tags in the global variable;
        file.data = template.content.firstElementChild;
    }
}

if(!inst)
{
    inst = new loader();
}

export default inst;

