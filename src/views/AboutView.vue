<template>
  <div class="about">
    <h3>Hello, i am a coding challenge product.</h3>

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
</template>

<script lang="ts">
import { defaultTo } from "lodash";

export default {
  methods: {
    navigateToGit: () => {
      window.open("https://github.com/dan-r95/challenge");
    },
  },
};
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
