<template>
  <div v-for="(item, index) in cards" :key="index" class="center">
    <CardComponent
      :value="item"
      @click="currentItem = item"
      :class="currentItem == item ? 'selected' : ''"
    />
  </div>
  <!--      class="w-50 m-2"-->
  <div class="m-5" v-if="currentItem">
    <el-input
      v-model="input2"
      size="small"
      placeholder="min"
      :prefix-icon="Search"
    />
    <el-input
      v-model="input2"
      size="small"
      placeholder="max"
      :prefix-icon="Search"
    />
    <el-slider v-model="value" range show-stops :max="10" />
    <el-table v-loading="loading" :data="transactions" style="width: 100%">
      <el-table-column prop="id" label="Id" width="180" />
      <el-table-column prop="amount" label="Amount" width="180" />
      <el-table-column prop="description" label="Description" />
    </el-table>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
const value = ref([4, 8]);

import CardComponent from "../components/Card.vue";
import type { Card } from "types/card";
import TransactionService from "../services/transaction.service";
export default {
  components: {
    CardComponent,
  },
  name: "HomeView",
  props: {
    msg: String,
  },
  mounted() {
    TransactionService.getCards().then((cards: Card) => (this.cards = cards));
  },
  data() {
    return {
      items: [1, 2],
      cards: [],
      value: [4, 8],
      currentItem: null,
      transactions: [],
      loading: true,
    };
  },
  watch: {
    currentItem(val: Card) {
      this.loading = true;
      TransactionService.getTransaction(val.id).then((transactions: any) => {
        this.transactions = transactions;
        this.loading = false;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.center {
  text-align: center;
}
.selected {
  border-color: green;
  border-radius: 5px;
}
</style>
