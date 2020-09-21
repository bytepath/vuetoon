import Entity from "../Components/Entity";
import CreateAsset from "./CreateAsset";

/**
 * Returns an entity if use is specified and returns a function to MAKE entities if it's not
 * @param src the file path to the SVG image
 * @param use the name of the layer/group that we want to create the entity with
 */
let createEntity = function(src = null, use = null) {
    if(!src){
        return Object.assign(Entity);
    }

    //console.log("create entity", src, use);
    // If a src and optionally, use are provided we are really creating an Asset not an entity.
    // An asset is an entity wrapped around an asset loader
    let factory = (name = null) => CreateAsset(src, name);
    return (use) ? factory(use) : factory;
}

export default createEntity;
