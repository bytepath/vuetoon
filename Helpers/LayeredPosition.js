import Position from "./Position";

export default class LayeredPosition extends Position {
    /**
     * Theres gotta be a better way to do this?
     */
    constructor(position, layer) {
        super(position);
        this.component = layer;
    }
}
