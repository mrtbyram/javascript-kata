import {Transaction} from "./transaction";

export function print(txns: Transaction[]): string {
    return `
    DATE\t\t| AMOUNT\t| BALANCE
    ${txns.map(txn => `${txn.date.toLocaleDateString()}\t| ${txn.amount}\t\t| ${txn.balance}`)
            .reduce((l1, l2) => l1.length > 0 ? l1 + '\n\t' + l2 : l2, '')}
    `;
}
