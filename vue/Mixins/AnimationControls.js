import DefaultTimer from "../Components/Timers/DefaultTimer";

export default {
    mixins: [],
    props: {
        repeat:{
            type: Boolean,
            default: false,
        },

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

        autoPlay:{
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
            name: "default",
            // The number of times the animation has repeated
            timesRepeated: 0
        };
    },

    mounted(){
        this.play();
    },

    computed:{
        // Determines whether we should start the timer or not
        shouldTick() {
            // If start is null we ignore it by setting it to a value below keyframe
            let start = (this.start !== null)? this.start : this.keyframe - 1;

            // If end is null we ignore it by setting it to a value above the keyframe
            let end = (this.end !== null)? this.end : this.keyframe + 1;

            return (this.keyframe >= start) && (this.keyframe < end);
        },
    },

    methods: {
        play() {
            // If we want to play a different movie then we need to reset the timer
            if(this.timerId) {
                if(this.name !== name) {
                    stop();
                    this.frame = 0;
                    this.timesRepeated = 0;
                }
            }

            // If there is no existing timer then we start one here
            else{
                this.createTimer();
            }
            this.name = name;
        },

        restart() {
            this.frame = 0;
            this.timesRepeated += 1;
        },

        stop(){
            console.log("timer stop", this.timerType());
            this.pause();
            this.frame = 0;
        },

        pause(){
            if(this.timerId !== null) {
                console.log("clearing timer", this.timerId);
                this.clearTimer();
            }
        },

        createTimer(){
            // Instantiate your tracking event that will control the animation
            this.timerId = true;
        },

        clearTimer(){
            // Clear the tracking event and release memory etc
            this.timerId = false;
        },

        running(){
            // Do something here in your child component/mixin target
        },

        timerType(){
            return "Animation Control Mixin";
        },

        timestep(time){
            if(!this.$options.prevFrameTime) {
                this.$options.prevFrameTime = time;
            }

            let frametime = 1000 / this.fps;
            if((time - this.$options.prevFrameTime >= frametime)){
                this.running();
                this.$options.prevFrameTime = time;
            }

            if(this.timerId !== null){
                this.newTimeout();
            }
        },
    },

    created(){},

    destroyed(){
        this.clear();
    },

    render() {
        // Use the default timer so we can ensure that components without timers still have all of the same fields
        let timer = DefaultTimer();
        timer.name = this.name;
        timer.repeat = this.repeat;
        timer.running = (this.timerId !== null);
        timer.timesRepeated = this.timesRepeated;
        timer.type = this.timerType();

        timer._p = this.play;
        timer._s = this.stop;
        timer._r = this.restart;
        timer._u = this.pause;

        return this.$scopedSlots.default({
            timer: timer,
            keyframe: this.frame,
        })
    }
}

