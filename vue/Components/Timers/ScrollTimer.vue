<script>
    import AnimationControls from "../../Mixins/AnimationControls";
    import debounce from "./debounce";

    export default {
        mixins: [AnimationControls],
        props: {
            // A multiplier for the outputted value to allow you to speed up or slow down the scroll playback speed
            speed:{
                type: Number,
                default: 1
            }
        },

        methods: {
            createTimer(){
                console.log("creating scroll timer");
                window.addEventListener('scroll', this.windowScrolled);
                this.timerId = true;
            },

            clearTimer() {
                window.removeEventListener('scroll', this.windowScrolled);
                this.timerId = null;
            },

            windowScrolled(){
                this.timeStep(Date.now());
                //this.running();
            },

            running(){
                this.frame = Math.floor(window.scrollY * this.speed);
            },

            timerType(){
                return "Scroll";
            }
        },
    }
</script>
