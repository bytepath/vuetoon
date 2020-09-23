export default {
    props: {
        // Keyframe of the overall animation
        keyframe:{
            type: Number,
            default: 0,
        },

        // We only run the timer when keyframe is >= start and < end
        start:{
            type: Number,
            default: null,
        },

        // If null end is ignored
        end:{
            type: Number,
            default: null,
        },

        pause:{
            type: Boolean,
            default: false,
        },

        /**
         * How many FPS to update this anumation at. default 60
         */
        fps: {
            type: Number,
            default: 60,
        }
    },

    data(){
        return {
            timerId: null,
            frame: 0,
        };
    },

    mounted(){
        this.createTimer();
    },

    computed:{
        // Determines whether we should start the timer or not
        shouldTick() {
            if(this.pause){
                return false;
            }

            // If start is null we ignore it by setting it to a value below keyframe
            let start = (this.start !== null)? this.start : this.keyframe - 1;

            // If end is null we ignore it by setting it to a value above the keyframe
            let end = (this.end !== null)? this.end : this.keyframe + 1;

            return (this.keyframe >= start) && (this.keyframe < end);
        },
    },

    methods: {
        createTimer(){
            // Instantiate your tracking event that will control the animation
            this.timerId = true;
        },

        clearTimer(){
            // Clear the tracking event and release memory etc
            this.timerId = false;
        },

        /**
         * Update the timers frame number somehow
         * @param timeDiff the difference in milliseconds between this and prev frame
         */
        running(timeDiff = 0){
            // Do something here in your child component/mixin target
        },

        timerType(){
            return "Animation Control Mixin";
        },

        timeStep(time) {
            if(!this.$options.prevFrameTime) {
                this.$options.prevFrameTime = time;
            }

            if(this.fps > 0) {
                let frametime = 1000 / this.fps;
                let timeDiff = time - this.$options.prevFrameTime;
                if ((timeDiff >= frametime)) {
                    this.running(Math.floor(timeDiff));
                    this.$options.prevFrameTime = time;
                }
            }

            if(this.timerId !== null){
                this.createTimer();
            }
        },
    },

    created(){},

    destroyed(){
        this.clearTimer();
    },

    render() {
        return this.$scopedSlots.default({
            keyframe: this.frame,
            type: this.timerType(),
            running: (this.timerId !== null),
        })
    }
}

