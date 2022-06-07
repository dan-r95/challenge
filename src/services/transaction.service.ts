import transactions from "./data/transactions";
import cards from "./data/cards";

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default {
  async getTransaction(item: string): Promise<any> {
    await delay(1500);
    return Promise.resolve(transactions.get(item));
  },

  async getCards(): Promise<any> {
    await delay(1500);
    return Promise.resolve(cards);
  },
};
