<template>
  <el-card shadow="always" class="box-card">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>
  </el-card>
</template>

<script lang="ts">
export default {
  name: "Transaction",
  methods: {},

  mounted() {},
};
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

.box-card {
  width: 250px;
  border: 3px solid;
}
</style>
