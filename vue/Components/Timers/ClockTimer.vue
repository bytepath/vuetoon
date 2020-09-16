<script>
    import AnimationControls from "../../Mixins/AnimationControls";

    export default {
        mixins: [AnimationControls],
        props: {
            timeout:{
                type: Number,
                default: 33,
            },

            interval: {
                type: Number,
                default: 33
            }
        },

        methods: {
            createTimer(){
                this.timerId = true;
                this.newTimeout();
            },

            clearTimer(){
                cancelAnimationFrame(this.timerId);
            },

            running(){
                //console.log("running");
                if(this.shouldTick) {
                    this.frame += this.interval;
                }
            },

            timerType(){
                return "Clock";
            },

            // Create a new timeout that when finished will run the running function of this control
            newTimeout() {
               this.timerId = requestAnimationFrame(this.timeStep);
            }
        },
    }
</script>
