<template>
  <div class="about">
    <h3 class="row">Hello, i am a coding challenge product.</h3>
    <Renderer ref="renderer" class="row">
      <Camera :position="{ z: 200 }" />
      <Scene background="#4DBA87">
        <AmbientLight color="#808080" />
        <PointLight :position="{ y: 50, z: 50 }" />
        <Text
          ref="text"
          text="Hello :)"
          font-src="@/assets/helv_regular.typeface.json"
          align="center"
          :size="30"
          :height="5"
          :position="{ x: 0, y: 0, z: 0 }"
          :cast-shadow="true"
        >
          <PhongMaterial />
        </Text>
      </Scene>
    </Renderer>
    <div>
      <el-button
        link
        href="https://github.com/dan-r95/challenge"
        @click="navigateToGit"
      >
        Visit my github profile
      </el-button>
    </div>
  </div>
  <Steps />
</template>

<script lang="ts">
import {
  Box,
  Camera,
  LambertMaterial,
  PointLight,
  Renderer,
  Scene,
  PhongMaterial,
  Text,
  AmbientLight,
} from "troisjs";
import Steps from "../../task/mysteps.md";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const renderer = ref();
    const text = ref();
    onMounted(() => {
      renderer?.value?.onBeforeRender(() => {
        if (text.value.mesh) {
          text.value.mesh.rotation.x -= 0.03;
        }
      });
    });

    return {
      renderer,
      text,
    };
  },
  components: {
    Box,
    Camera,
    LambertMaterial,
    PointLight,
    Renderer,
    Scene,
    PhongMaterial,
    Text,
    AmbientLight,
    Steps,
  },
  methods: {
    navigateToGit: () => {
      window.open("https://github.com/dan-r95/challenge");
    },
  },
});
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
