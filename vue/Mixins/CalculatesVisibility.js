import IsElementVisible from "../../Helpers/IsElementVisible";

export default {
    data() {
        return {
            // If true this element has been visible on the screen at least once
            wasVisible: false,
        };
    },

    methods: {
        isVisible(){
            let retval = this.keyframe;
            retval = 0;

            if(this.$el){
                retval = IsElementVisible(this.$el);
            }

            // This is just to keep track of whether this value has been true in the past
            // so I think it's fine assuming it's not set anywhere else
            /* eslint-disable-next-line */
            this.wasVisible |= retval;
            return retval;
        },
    }
}
