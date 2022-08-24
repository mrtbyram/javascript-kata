import {print} from "./printer";
import {Transaction} from "./transaction";
import {InsufficientMoney} from "./business-errors";

export class Account {
    private txns: Transaction[] = [];

    deposit(amount: number){
        this.txns.push(new Transaction(new Date(), amount, this.getBalance() + amount))
    }

    withdraw(amount: number){
        let balance = this.getBalance();
        if (balance < amount) throw new InsufficientMoney('Insufficient money in your account');
        this.txns.push(new Transaction(new Date(), -amount, balance - amount))
    }

    private getBalance(): number {
        return this.txns.length > 0 ? this.txns[this.txns.length - 1].balance : 0;
    }

    printStatement(){
        console.log(print(this.txns));
    }

}
