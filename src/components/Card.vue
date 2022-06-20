<template>
  <el-card shadow="always" class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ value.id }}</span>
      </div>
      <div class="bottom">
        <span class="italic"> {{ value.description }} </span>
        <el-button
          class="has-margin"
          type="success"
          icon="DArrowRight"
          circle
        />
      </div>
    </template>
  </el-card>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { defineComponent } from "vue";
import { Check, DArrowRight } from "@element-plus/icons-vue";

import type { CardType } from "../types";

export default defineComponent({
  name: "Card",
  methods: {},
  props: {
    value: { type: Object as PropType<CardType>, required: true },
  },
  mounted() {},
});
</script>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.has-margin {
  margin-left: 20px;
}

.italic {
  font-style: italic;
}

.box-card {
  width: 300px;
  border: 3px solid;
}
</style>
