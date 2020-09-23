<script>
    import PlaybackTimer from "../../Mixins/PlaybackTimer";

    export default {
        mixins: [PlaybackTimer],
        props: {},

        methods: {
            createTimer(){
                this.timerId = true;
                this.newTimeout();
            },
            
            running(timeDiff = 0){
                //console.log("running");
                if(this.shouldTick) {
                    this.frame += timeDiff;
                }
            },

            timerType(){
                return "Clock";
            },

            // Create a new timeout that when finished will run the running function of this control
            newTimeout() {
                if(this.fps > 0) {
                    requestAnimationFrame(this.timeStep);
                    this.timerId = true;
                }
            }
        },
    }
</script>
