<template>
    <svg :id="'svg' + usedAsset" :width="w" :height="h" :transform="transform" :viewBox="viewboxString"
         :preserveAspectRatio="preserveAspectRatio">
        <asset-loader v-if="src" :src="src" :asset="asset" @loaded="assetLoaded" v-slot="{ href }">
            <g :id="'g' + usedAsset" :transform="assetMatrix">
                <use v-if="href" :href="href + ((use)?use:'')"/>
            </g>
        </asset-loader>
        <template v-if="debug">
            <rect v-if="debug" :x="centerPosition.x - 5" :y="centerPosition.y - 5" width="10" height="10" fill="blue"/>
        </template>
    </svg>
</template>

<script>
    import AssetLoader from "./Loaders/AssetLoader";
    import AnimationEntity from "../Mixins/AnimationEntity";
    import CreateAsset from "../Factories/CreateAsset";

    export default {
        name: 'entity',
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
             * The internal id inside the SVG that we want to use. Leave blank to use the whole asset
             */
            use: {
                type: String,
                default: null
            },

            /**
             * position rect with {x,y,width,height}
             * If provided the camera will be moved to this location
             */
            camera: {
                type: Number,
                default: null
            },
        },
        data() {
            return {
                /**
                 * The transformation matrix for the loaded asset
                 * @var DOMMatrix
                 */
                em: new DOMMatrix(),

                /**
                 * A rectangle representing the area of the user coordinate system we want to display
                 */
                assetDimensions: null,
            };
        },

        computed: {
            preserveAspectRatio(){
                //return "xMinYMin slice";
                return "none";
            },

            viewBox(){
                let viewbox = null;

                // 0 0 500 1000

                //top left          [0,0]
                //top right      [500, 0]
                //bottom left    [0,1000]
                //bottom right [500,1000]


                //viewbox = [ 0 0 500 100 ]
                /////top left// [0,0]    [500, 0]   //Top Right
                //Bottom Left// [0,1000] [500,1000] //Bottom right

                //let tl = new DOMPoint(0,0);
                //let tr = new DOMPoint(500,0);
                //let bl = new DOMPoint(0,1000);
                //let br = new DOMPoint(500,1000);


                // let tl = new DOMPoint(viewbox.x,viewbox.y);
                // let tr = new DOMPoint(viewbox.width,viewbox.y);
                // let bl = new DOMPoint(viewbox.x,viewbox.height);
                // let br = new DOMPoint(viewbox.width,viewbox.height);

                //
                // console.log("before", tl,tr,bl,br);
                // let matrix = new DOMMatrix();
                // matrix.translateSelf(100,0);
                //
                // tl = tl.matrixTransform(matrix);
                // tr = tr.matrixTransform(matrix);
                // bl = bl.matrixTransform(matrix);
                // br = br.matrixTransform(matrix);
                // console.log("after", tl,tr,bl,br);
                // console.log("0 0 500 1000");
                // let cameraviewbox = `${tl.x} ${tl.y} ${br.x} ${br.y}`;

                // Viewbox is calculated using {x y total-length total-height}
                // which is confusing. Instead we use camera position which is
                // {x y x+width x+height }
                if(this.assetDimensions){
                    viewbox = {};
                    viewbox.x = this.assetDimensions.x;
                    viewbox.y = this.assetDimensions.y;
                    viewbox.width = (this.assetDimensions.width - this.assetDimensions.x);
                    viewbox.height = (this.assetDimensions.height - this.assetDimensions.y);

                    if(this.camera){

                        let tl = new DOMPoint(viewbox.x,viewbox.y);
                        // let tr = new DOMPoint(viewbox.width,viewbox.y);
                        // let bl = new DOMPoint(viewbox.x,viewbox.height);
                        let br = new DOMPoint(viewbox.width,viewbox.height);

                        let matrix = new DOMMatrix();
                        //let scale = 1 - Math.abs((Math.sin(this.camera/500)));
                        let scale = 0.3;
                        let center = matrix.translate(this.assetDimensions.width / 2, this.assetDimensions.height / 2);
                        matrix.multiplySelf(center);
                        matrix.scaleSelf(scale, scale);
                        matrix.multiplySelf(center.inverse());
                        matrix.translateSelf(((Math.sin(this.camera/500)) * (this.assetDimensions.width / (1/(scale/2)))), ((Math.cos(this.camera/500)) * (this.assetDimensions.height / (1/(scale/2)))));
                        tl = tl.matrixTransform(matrix);
                        // tr = tr.matrixTransform(matrix);
                        // bl = bl.matrixTransform(matrix);
                        br = br.matrixTransform(matrix);
                        //this.transform = matrix.inverse();
                        console.log(scale, `${tl.x} ${tl.y} ${br.x} ${br.y}`);
                        this.position.width = br.x * (1/scale);//this.assetDimensions.width * 2;
                        this.position.height = br.y * (1/scale)//this.assetDimensions.height * 2;;
                        return {
                            x: Math.abs(tl.x),
                            y: Math.abs(tl.y),
                            width: (br.x),// + (tl.x),
                            height: (br.y),// + (tl.y),
                        };
                    }
                }



                return viewbox;
            },

            viewboxString() {
                if (this.viewBox) {
                    let b = this.viewBox;
                    return `${b.x} ${b.y} ${b.width} ${b.height}`;
                }

                return null;
            },

            /**
             * The transformation matrix for the loaded asset returned as a string
             * @returns String
             */
            assetMatrix() {
                return this.em.toString();
            },

            /**
             * The ID that should be used on the loaded svg file, should we be the component responsible for doing that
             * @returns String
             */
            asset() {
                let asset = (this.name) ? `__${this._uid}-${this.name}` : `__${this._uid}`;
                return asset;
            },

            /**
             * The ID of the DOM asset we are using to draw this entity.
             * @returns String
             */
            usedAsset() {
                return (this.use) ? (this.asset + this.use) : this.asset;
            }
        },
        methods: {
            /**
             * Called when asset has been loaded by the asset loader component. Moves whatever we are trying to look at
             * to point {0, 0} so that we are "looking" at it
             */
            assetLoaded(asset) {
                if (asset.viewBox) {
                    this.assetDimensions = { ...asset.viewBox };
                }
                setTimeout(this.lookAtAsset, 0);
            },

            /**
             * Moves the "camera" to look directly at the asset we are puling from a larger scene
             */
            lookAtAsset() {
                console.log("looking at", 'g' + this.usedAsset);
                let element = document.getElementById('g' + this.usedAsset);
                if (element) {
                    if (typeof element.getBBox == "function") {
                        let bbox = element.getBBox();

                        // Move the asset into the position of the camera by multiplying by the inverse of its bbox
                        // X y positions
                        this.position.height = bbox.height;
                        this.position.width = bbox.width;

                        console.log("bbox", bbox);
                        // Set camera position to the BBox of this element
                        this.assetDimensions.x = bbox.x;
                        this.assetDimensions.y = bbox.y;
                        this.assetDimensions.width = bbox.width + bbox.x;
                        this.assetDimensions.height = bbox.height + bbox.y;
                        //this.em = new DOMMatrix([1, 0, 0, 1, -bbox.x, -bbox.y]);

                    }
                }
            },
        },
        components: {AssetLoader},

        /**
         * The following methods are used to instantiate an entity using an external asset
         * and are automatically removed by vue when creating a component
         */
        src: null,
        fromAsset(src) {
            return CreateAsset(src);
        },
    }
</script>

