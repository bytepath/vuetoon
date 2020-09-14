export default {
    props: {
        /**
         * Final X position is multiplied by this value so that you can use the same animation or scroll loop
         * on multiple items but still move at different speeds. Ignored if null
         */
        mx:{
            type: Number,
            default: null,
        },

        /**
         * Final y position is multiplied by this value so that you can use the same animation or scroll loop
         * on multiple items but still move at different speeds. Ignored if null
         */
        my: {
            type: Number,
            default: null,
        },
    },

    created(){
        this.registerMutation(this.AcceleratesTranslation);
    },

    methods:{
        AcceleratesTranslation(matrix) {
            let accelerate = new DOMMatrix();
            if (this.mx) {
                accelerate.e = matrix.e * this.mx;
            }

            if (this.my) {
                accelerate.f = matrix.f * this.my;
            }

            return matrix.multiply(accelerate);
        }
    },
    components:{}
}
