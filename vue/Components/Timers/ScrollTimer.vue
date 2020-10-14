<script>
    import PlaybackTimer from "../../Mixins/PlaybackTimer";

    export default {
        mixins: [PlaybackTimer],
        props: {
            // A multiplier for the outputted value to allow you to speed up or slow down the scroll playback speed
            speed:{
                type: Number,
                default: 1
            },

            responsive: {
                type: Boolean,
                default: true,
            },
        },

        mounted() {
            this.updateViewportScale();
            window.addEventListener('resize', this.updateViewportScale);
        },

        data() {
            return {
                scale: 1,
            }
        },

        methods: {
            createTimer(){
                window.addEventListener('scroll', this.windowScrolled);
                this.timerId = true;
            },

            clearTimer() {
                window.removeEventListener('scroll', this.windowScrolled);
                this.timerId = null;
            },

            windowScrolled(){
                // To make the :fps prop work as expected, we pass the current time in milliseconds
                // to the timeStep function
                this.timeStep(Date.now());
            },

            running(){
                this.frame = Math.floor(window.scrollY * this.speed);

                if(this.responsive) {
                    this.frame *= this.scale;
                }
            },

            timerType(){
                return "Scroll";
            },

            // Updates the scale factor for the output keyframe
            updateViewportScale(){
                if(this.$el){
                    let m = this.$el.getScreenCTM();
                    console.log("ve");
                    this.scale = 1 + (1 - m.d);
                }
            },
        },
    }
</script>
