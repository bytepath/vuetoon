/**
 * Factory function to create a new asset
 * @param src the file path to the SVG image
 * @param use the name of the layer/group that we want to create the entity with
 * @returns {{mixins: [*], components: {Entity: *}, data(): *, name: (*|string), render: (function(*): *)}|{src: *, use: *}}
 */
import Asset from "../Mixins/Asset"
import Entity from "../Components/Entity";
import AnimationEntity from '../Mixins/AnimationEntity';
import nameFromPath from "../Components/Filters/Filename";

let createAsset = function(src, use = null) {
    //console.log("create asset", src, use, this);
    let retval = {};

    let component = {
        ...Asset,
        data() {
            return {src, use};
        },
        components: { Entity },
    };

    delete component.name;
    return component;
}

export default createAsset;
