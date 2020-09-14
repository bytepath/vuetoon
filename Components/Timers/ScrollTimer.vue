<script>
    import AnimationControls from "../../Mixins/AnimationControls";
    import debounce from "./debounce";

    export default {
        mixins: [AnimationControls],
        props: {
            // If true, the scroll movement of the browser will be locked
            scrollLock:{
                type: Number,
                default: null,
            },

            // A multiplier for the outputted value to allow you to speed up or slow down the scroll playback speed
            speed:{
                type: Number,
                default: 1
            }
        },

        data(){
            return {
                // If we enable scroll lock, we lock the frame at the time you enable.
                // Example: if you turn on scroll lock at scrollY = 5, we lock the scroll at 5
                lockedScrollPosition: null,
            };
        },

        computed:{},

        methods: {
            createTimer(){
                window.addEventListener('scroll', this.debounceRunning);
                this.timerId = true;
            },

            clearTimer() {
                window.removeEventListener('scroll', this.debounceRunning);
                this.timerId = null;
            },

            debounceRunning(){
                // If a scroll lock value has been set, we prevent the browser from scrolling past this position
                if(this.scrollLock !== null){
                    if(window.scrollY >= this.scrollLock) {
                        window.scrollTo(0, this.scrollLock);
                    }
                }

                debounce(this.running, 100)();
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
