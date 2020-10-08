<template>
    <svg :id="'svg' + assetID"
         :width="w" :height="h"
         :viewBox="viewboxString"
         :preserveAspectRatio="preserveAspectRatio"
         :overflow="overflow"
         :filter="filterID">
        <asset-loader :src="src" :owner="assetID" @loaded="assetLoaded"/>
        <defs v-if="filter">
            <component :id="'filter' + assetID" v-if="filter" :keyframe="keyframe" :is="filter"/>
        </defs>
        <g :id="'g' + assetID" :transform="transform">
            <slot :position="position" :href="href"/>
        </g>
    </svg>
</template>

<script>
    /* eslint-disable */

    import AssetLoader from "../Loaders/AssetLoader";
    import CalculatesTransformation from "../../Mixins/CalculatesTransformation";
    import AcceptsViewportProps from "../../Mixins/AcceptsViewportProps";
    import Position from "../../../Helpers/Position";

    export default {
        name: 'Vector',
        mixins: [AcceptsViewportProps, CalculatesTransformation],
        props: {
            /**
             * The file path to the asset we need to load. Optional if you don't need to load an asset
             */
            src: {
                type: String,
                default: null,
            },


            /**
             * Add a filter to this vector
             */
            filter: {
                type: Object,
                default: null,
            },
        },

        data() {
            return {
                /**
                 * A rectangle representing the area of the user coordinate system we want to display
                 */
                assetDimensions: null,

                /**
                 * The href we can use to find the loaded asset
                 */
                href: null,
            };
        },

        computed: {
            /**
             * Determines whether this vector should add the viewbox attibute to its tag
             * @returns boolean
             */
            shouldShowViewbox() {
                /**
                 * We always show the viewbox if showviewbox is true
                 */
                if(this.showViewbox === true){
                    return true;
                }

                /**
                 * If this is the top mounted vector element then we show viewbox unless the
                 * :show-viewbox prop is set to false
                 */
                if(this.$el) {
                    if(Object.prototype.hasOwnProperty.call(this.$el, "farthestViewportElement")) {
                        if(this.$el.farthestViewportElement === null) {
                            return (this.showViewbox !== false);
                        }
                    }
                }

                // if (this.viewBox && (this.showViewbox || this.camera)) {
                //
                // }
                return false;
            },

            /**
             * Computes the preserveAspectRatio attribute for this svg
             */
            preserveAspectRatio() {
                if (this.camera) {
                    return "none";
                }

                if (this.align) {
                    // Convert the human friendly alignment options to SVG
                    let commands = {
                        'none': "none",
                        'top-left': 'xMinYMin',
                        'topleft': 'xMinYMin',
                        'top': 'xMidYMin',
                        'top-right': 'xMaxYMin',
                        'topright': 'xMaxYMin',
                        'left': 'xMinYMid',
                        'middle': 'xMidYMid',
                        'right': 'xMaxYMid',
                        'bottom-left': 'xMinYMax',
                        'bottomleft': 'xMinYMax',
                        'bottom': 'xMidYMax',
                        'bottom-right': 'xMaxYMax',
                        'bottomright': 'xMaxYMax',
                    };

                    if (Object.prototype.hasOwnProperty.call(commands, this.align)) {
                        let retval = commands[this.align];

                        if (this.fit !== null) {
                            retval += (this.fit) ? ' meet' : ' slice';
                        }

                        return retval;
                    }
                }
                return "none";
            },

            /**
             * The viewbox is what svg uses to figure out what portion of the coordinate system to draw.
             * We multiply the values against the passed in camera prop to simulate moving the camera around
             * viewbox = [ 0 0 500 100 ]
             * top left    [0,0]    [500, 0]   //Top Right
             * Bottom Left [0,1000] [500,1000] //Bottom right
             */
            viewBox() {
                if (this.camera) {
                    let viewBox = new Position({...this.camera});
                    if (this.assetDimensions) {

                        viewBox.centerX = this.assetDimensions.width / (2 * this.camera.scaleX);
                        viewBox.centerY = this.assetDimensions.height / (2 * this.camera.scaleY);
                        viewBox.scaleX = 1 / this.camera.scaleX;
                        viewBox.scaleY = 1 / this.camera.scaleY;

                        let tl = viewBox.multiplyPoint(this.assetDimensions.x, this.assetDimensions.y);
                        let br = viewBox.multiplyPoint(this.assetDimensions.width, this.assetDimensions.height);

                        this.dimensions.width = br.x * (this.camera.scaleX);
                        this.dimensions.height = br.y * (this.camera.scaleY);

                        return new Position({
                            x: (tl.x),
                            y: (tl.y),
                            width: (br.x),
                            height: (br.y),
                        });
                    }
                }

                if (this.assetDimensions) {
                    let viewBox = null;
                    viewBox = new Position({
                        x: this.assetDimensions.x,
                        y: this.assetDimensions.y,
                        width: (this.assetDimensions.width - this.assetDimensions.x),
                        height: (this.assetDimensions.height - this.assetDimensions.y),
                    });

                    return viewBox;
                }

                return null;
            },

            viewboxString() {
                // Camera needs a viewbox to operate properly so we need to show it if you provide a camera
                //if (this.viewBox && (this.showViewbox || this.camera)) {
                if (this.shouldShowViewbox && this.viewBox) {
                    let b = this.viewBox;
                    return `${b.x} ${b.y} ${b.width} ${b.height}`;
                }

                return null;
            },

            /**
             * The ID that should be used on the loaded svg file, should we be the component responsible for doing that
             * @returns String
             */
            assetID() {
                let asset = (this.name) ? `__${this._uid}-${this.name}` : `__${this._uid}`;
                return asset;
            },

            /**
             * The ID of the filter attached to this vector
             */
            filterID() {
                if (this.filter) {
                    return `url(#filter${this.assetID})`;
                }

                return null;
            }
        },

        mounted() {
            if (this.src === null) {
                this.calculateSelfDimensions();
            }
        },

        methods: {
            /**
             * Called when asset has been loaded by the asset loader component. Moves whatever we are trying to look at
             * to point {0, 0} so that we are "looking" at it
             */
            assetLoaded(asset) {
                this.href = "#" + asset.id;

                if (asset.viewBox) {
                    this.assetDimensions = {...asset.viewBox};
                }

                setTimeout(this.lookAtAsset, 0);
                this.$emit("loaded", asset);
            },

            /**
             * @refactor This function and lookAtAsset really should be one method
             */
            calculateSelfDimensions() {
                if (this.$el) {
                    if (this.$el.getBBox) {
                        let bbox = this.$el.getBBox();
                        this.assetDimensions = new Position({
                            x: bbox.x,
                            y: bbox.y,
                            width: bbox.width + bbox.x,
                            height: bbox.height + bbox.y,
                        });


                        // Set the width of this entity using the size of its bbox
                        this.dimensions.height = bbox.height;
                        this.dimensions.width = bbox.width;

                        // Set the center position
                        this.dimensions.centerX = (bbox.width + bbox.x) / 2;
                        this.dimensions.centerY = (bbox.height + bbox.y) / 2;
                    }
                }
            },

            /**
             * Moves the "camera" to look directly at the asset we are puling from a larger scene
             */
            lookAtAsset() {
                let lookAtID = 'g' + this.assetID;

                let element = document.getElementById(lookAtID);
                if (element) {
                    if (typeof element.getBBox == "function") {
                        let bbox = element.getBBox();

                        // Set the width of this entity using the size of its bbox
                        this.dimensions.height = bbox.height;
                        this.dimensions.width = bbox.width;

                        // Set the center position
                        this.dimensions.centerX = (bbox.width + bbox.x) / 2;
                        this.dimensions.centerY = (bbox.height + bbox.y) / 2;

                        // Set camera position to the BBox of this element
                        this.assetDimensions.x = bbox.x;
                        this.assetDimensions.y = bbox.y;
                        this.assetDimensions.width = bbox.width + bbox.x;
                        this.assetDimensions.height = bbox.height + bbox.y;
                    }
                } else {
                    console.log("couldnt find an element with ", lookAtID, this);
                }
            },
        },
        components: {AssetLoader},
    }
</script>

