<script>
    import PlaybackTimer from "../../Mixins/PlaybackTimer";

    export default {
        mixins: [PlaybackTimer],
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

        },
    }
</script>
