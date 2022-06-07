import { transactions } from './data/transactions'
import { cards } from './data/cards'

function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export default {

    async getTransaction(item: String): Promise<any> {
       await delay(1000)
       return Promise.resolve(transactions[item]);
    },

    async getCards(): Promise<any> {
        await delay(1000)
        return Promise.resolve(cards);
    }

}