<template>
    <svg :id="'svg' + assetID"
         :width="w" :height="h"
         :viewBox="viewboxString"
         :preserveAspectRatio="$attrs.aspect"
         :overflow="overflow">
        <asset-loader :src="src" :owner="assetID" @loaded="assetLoaded"/>
        <g :id="'g' + assetID" :transform="transform">
            <slot :position="position" :href="href"/>
        </g>
    </svg>
</template>

<script>
    import AssetLoader from "../Loaders/AssetLoader";
    import AnimationEntity from "../../Mixins/AnimationEntity";
    import Position from "../../../Helpers/Position";

    export default {
        name: 'Vector',
        mixins: [AnimationEntity],
        props: {
            /**
             * The file path to the asset we need to load. Optional if you don't need to load an asset
             */
            src: {
                type: String,
                default: null,
            },

            /**
             * What to do if this entity goes outside it's clip boundaries. Default we just continue drawing it
             */
            overflow: {
                type: String,
                default: "visible"
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
            preserveAspectRatio() {
                //return "xMinYMin slice";
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
                let viewBox = null;

                if (this.assetDimensions) {
                    viewBox = new Position({
                        x: this.assetDimensions.x,
                        y: this.assetDimensions.y,
                        width: (this.assetDimensions.width - this.assetDimensions.x),
                        height: (this.assetDimensions.height - this.assetDimensions.y),
                    });


                    if (this.camera) {

                        //console.log("camera", this.camera);
                        viewBox.centerX = this.assetDimensions.width / this.camera.scaleX;
                        viewBox.centerY = this.assetDimensions.height / this.camera.scaleY;
                        viewBox.scaleX = 1 / this.camera.scaleX;
                        viewBox.scaleY = 1 / this.camera.scaleY;
                        viewBox.x = this.camera.x * (this.assetDimensions.width / (this.camera.scaleX << 2));
                        viewBox.y = this.camera.y * (this.assetDimensions.height / (this.camera.scaleY << 2));

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

                return viewBox;
            },

            viewboxString() {
                if (this.viewBox) {
                    let b = this.viewBox;
                    if (b.width > 0 && b.height > 0) {
                        return `${b.x} ${b.y} ${b.width} ${b.height}`;
                    }
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
        },

        mounted() {
            if (this.src === null) {
                let bbox = this.getSelfDimensions();
                this.assetDimensions = new Position({
                    x: bbox.x,
                    y: bbox.y,
                    width: bbox.width + bbox.x,
                    height: bbox.height + bbox.y,
                });
            }
        },

        methods: {
            /**
             * Called when asset has been loaded by the asset loader component. Moves whatever we are trying to look at
             * to point {0, 0} so that we are "looking" at it
             */
            assetLoaded(asset) {
                console.log("asset loaded", {...this});

                this.href = "#" + asset.id;

                if (asset.viewBox) {
                    this.assetDimensions = {...asset.viewBox};
                    console.log("viewbox", {...asset});

                } else {
                    console.log("no viewbox bra");
                }
                setTimeout(this.lookAtAsset, 0);
                this.$emit("loaded", asset);
            },

            getSelfDimensions() {
                return this.$el.getBBox();
            },

            /**
             * Moves the "camera" to look directly at the asset we are puling from a larger scene
             */
            lookAtAsset() {
                let lookAtID = 'g' + this.assetID;
                console.log("lookat", lookAtID);
                let element = document.getElementById(lookAtID);
                if (element) {
                    if (typeof element.getBBox == "function") {
                        let bbox = element.getBBox();

                        // Set the width of this entity using the size of its bbox
                        this.dimensions.height = bbox.height;
                        this.dimensions.width = bbox.width;

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

