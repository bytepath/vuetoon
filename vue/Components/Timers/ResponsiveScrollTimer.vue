<script>
    import AnimationControls from "../../Mixins/AnimationControls";
    import debounce from "./debounce";

    export default {
        mixins: [AnimationControls],
        props: {},

        data(){
            return {
                scroll: 0,
                scale: 1,
            }
        },

        computed:{},

        mounted() {
            this.updateViewportScale();
            window.addEventListener('resize', this.updateViewportScale);
        },

        methods: {
            // Updates the scale factor for the output keyframe
            updateViewportScale(){
                if(this.$el){
                    let m = this.$el.getScreenCTM();
                    console.log("ve");
                    this.scale = 1 + (1 - m.d);
                }
            },

            createTimer(){
                window.addEventListener('scroll', this.debounceRunning);
                this.timerId = true;
            },

            clearTimer() {
                window.removeEventListener('scroll', this.debounceRunning);
                this.timerId = null;
            },

            debounceRunning(){
              debounce(this.running, 100)();
            },

            running(){
                this.scroll = window.scrollY;
                this.frame = Math.floor(this.scroll * this.scale);
            },

            timerType(){
                return "Scroll";
            }
        },
    }
</script>
