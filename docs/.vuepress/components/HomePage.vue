<script>
    import Bytepath from "bytepath";
    import OceanScene from "../../../Samples/Scenes/Ocean/OceanScene";
    import Farm from "../../../Samples/Scenes/Farm/Farm";

    export default {
        data() {
            return {};
        },

        components: {
            OceanScene,
            Farm,
            scroll: Bytepath.timers.scroll,
            scene: Bytepath.graphics.scene,
        },
    };
</script>

<template>
    <div>
        <div style="height: 75vh;"></div>
        <scroll v-slot="{ keyframe }" auto-play>
            <svg viewBox="0 0 1380 3800" >

                <farm color="rgb(227,218,166)" :keyframe="keyframe" :y="2500">
                    <div class="flex justify-around content-around">
                        <div style="background-color: rgb(226,221,191);" class="content-around text-red-400 h-screen w-full w-screen">
                            <h1 class="text-lg">What Is Lorem Ipsum</h1>
                            <p>What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                Why do we use it?
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                            <br />

                            <h3>INSERT YOUR HTML HERE</h3>
                        </div>
                    </div>
                </farm>

                <ocean-scene :show-viewbox="false" style="fill:#90CDF4;" :keyframe="keyframe">
                    <div class="flex justify-around content-around">
                        <div style="background-color: #587076;" class="content-around text-red-400 h-screen w-full w-screen">
                            <h1 class="text-lg">What Is Lorem Ipsum</h1>
                            <p>What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                Why do we use it?
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                            <br />

                            <h3>INSERT YOUR HTML HERE</h3>
                        </div>
                    </div>
                </ocean-scene>
            </svg>
        </scroll>
    </div>
</template>
