<template>
  <div v-loading="loading">
    <div v-for="(item, index) in cards" :key="index" class="center">
      <Card
        :value="item"
        @click="currentItem = item"
        :class="currentItem == item ? 'selected' : ''"
      />
    </div>

    <div class="m-5" v-if="currentItem">
      <el-input
        v-model="inputMin"
        size="small"
        type="number"
        placeholder="min"
        :prefix-icon="Search"
      />
      <el-input
        v-model="inputMax"
        size="small"
        type="number"
        placeholder="max"
        :prefix-icon="Search"
      />
      <el-slider
        v-model="valueRange"
        range
        show-stops
        :max="inputMax"
        @change="sliderChange"
      />
      <el-table
        v-loading="loadingTransactions"
        :data="transactions"
        class="table"
      >
        <el-table-column prop="id" label="Id" width="180" />
        <el-table-column prop="amount" label="Amount" width="180" />
        <el-table-column prop="description" label="Description" />
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
</script>

<script lang="ts">
import { ref } from "vue";
import { defineComponent } from "vue";

import Card from "../components/Card.vue";
import type { CardType, TransactionType } from "../types";
import TransactionService from "../services/transaction.service";

export default defineComponent({
  components: {
    Card,
  },
  name: "HomeView",
  props: {},
  async created() {
    const cards = await TransactionService.getCards();
    this.cards = cards;
    this.loading = false;
  },
  data() {
    return {
      cards: [],
      value: [4, 8],
      currentItem: null,
      transactions: [],
      originalTransactions: [],
      loading: true,
      loadingTransactions: false,
      inputMin: 0,
      inputMax: 0,
      valueRange: [0, 0],
    };
  },
  watch: {
    async currentItem(val: CardType) {
      this.loadingTransactions = true;
      const transactions = await TransactionService.getTransaction(val.id);
      this.originalTransactions = transactions;
      this.transactions = transactions;
      this.setTransactionRange();
      this.loadingTransactions = false;
    },
    inputMin(val: number) {
      let transactions = this.originalTransactions.filter(
        (item: TransactionType) => {
          return item.amount >= val && item.amount <= this.inputMax;
        }
      );
      this.transactions = transactions;
    },
  },
  methods: {
    setTransactionRange() {
      let min = 0;
      let max = 1;
      //this.inputMin = min;
      //this.inputMax = max;
      if (this.transactions != null) {
        min = this.transactions.reduce(
          (min: number, transaction: TransactionType) => {
            return transaction.amount < min ? transaction.amount : min;
          },
          this.transactions[0]["amount"]
        );
        max = this.transactions.reduce(
          (max: number, transaction: TransactionType) => {
            return transaction.amount > max ? transaction.amount : max;
          },
          this.transactions[0]["amount"]
        );
        this.inputMin = min;
        this.inputMax = max;
        this.valueRange = [min, max];
      }
    },
    sliderChange(newValue: any) {
      if (newValue.length == 2) {
        this.inputMin = newValue[0];
        this.inputMax = newValue[1];
      }
    },
  },
});
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
  border-color: var(--selected-color) !important;
  background-color: var(--selected-color);
  border-radius: 5px;
}

.table {
  width: 100%;
  border-color: var(--selected-color);
  background-color: var(--selected-color);
}
</style>
