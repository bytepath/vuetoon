import { translate } from 'transformation-matrix';

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
            let e = 0;
            let f = 0;
            if (this.mx) {
                e = matrix.e * this.mx;
            }

            if (this.my) {
                f = matrix.f * this.my;
            }

            let retval = translate(e, f);
            console.log("accel return", retval);
            return retval;
        }
    },
    components:{}
}
