/* eslint-disable */
import LayeredPosition from "./LayeredPosition";

/**
 * Ensures unique IDs in the imported SVG by appending :asset to EVERY id inside the svg
 * @param {String} html The representing a single element
 * @return {Element}
 */
export default function (asset, layer = null) {
    // Convert the string into dom elements
    var template = document.createElement('template');
    template.innerHTML = asset.data.outerHTML;

    let rawLayers = [];
    let layers = {};

    // Extract only a single layer and its children if provided
    if (layer !== null) {
        let element = template.content.firstElementChild.querySelector(`[id="${asset.key}${layer}"]`);

        element.children.forEach((el) => {
            if (el.id) {
                rawLayers.push(el.id);
            }
        });
    }
    else {
        template.content.firstElementChild.children.forEach((el) => {
            if (el.id) {
                rawLayers.push(el.id);
            }
        });
    }

    // Filter layers we don't want
    rawLayers.filter((layer) => (layer.charAt(0) !== "_"))
        .map((layer) => {
            console.log("filter check", layer);
            let name = layer.split(asset.key).splice(1).join("");
            layers[name] = new LayeredPosition({}, {name, id: layer});
    });

    return layers;
}
