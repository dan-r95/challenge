import { transactions } from '../data/transactions'
import { cards } from '../data/cards'


export class TransactionService {

    public getTransactions(): any {
        return transactions;
    }

    public getCards(): any {
        return cards
    }

}