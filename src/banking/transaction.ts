export class Transaction {
    readonly date: Date;
    readonly amount: number;
    readonly balance: number;

    constructor(date: Date, amount: number, balance: number) {
        this.date = date;
        this.amount = amount;
        this.balance = balance;
    }
}
