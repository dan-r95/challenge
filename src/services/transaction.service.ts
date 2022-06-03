import { transactions } from './data/transactions'
import { cards } from './data/cards'


export default {

    getTransactions(): any {
        return Promise.resolve(transactions);
    },

    getCards(): any {
        return Promise.resolve(cards);
    }

}