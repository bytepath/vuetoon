/**
 * Returns the position this asset is using as center
 * @returns {{x: number, y: number}}
 */
import Position from "../../Helpers/Position";

export default {
    methods: {
        getCenterPosition() {
            // Defaults to 0,0
            let retval = { x:0, y:0 };

            // Center X
            if (this.cx !== null) { // Use Prop first
                retval.x = this.cx;
            } else if (this.position.centerX !== null) { // Then use position
                retval.x = this.position.centerX;
            } else { // If no position use half the width
                retval.x = (this.viewbox.width / 2) + this.viewbox.x;
            }

            // Center Y
            if (this.cy !== null) { // Use Prop first
                retval.y = this.cy;
            } else if (this.position.centerY !== null) { // Then use position
                retval.y = this.position.centerY;
            } else { // If no position use half the height
                retval.y = (this.viewbox.height / 2) + this.viewbox.y;
            }

            return new Position(retval);
        }
    }
}
