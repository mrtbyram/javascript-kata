import {Account} from "./account";
import {print} from "./printer";
import {Transaction} from "./transaction";
import {InsufficientMoney, InternalError} from "./business-errors";

describe('account tests', () => {
    let originalConsoleLog = console.log;
    let consoleMock = jest.fn((message: string) => {originalConsoleLog(message)});

    beforeEach(() => {
        console.log = consoleMock;
    })

    afterEach(() => {
        console.log = originalConsoleLog;
    })

    it('initialize account without a transaction', () => {
        let account: Account = new Account();

        account.printStatement();

        expect(consoleMock).toBeCalledWith(print([]));
    })

    it('deposit money', () => {
        let account: Account = new Account();

        account.deposit(100);
        account.deposit(200);
        account.deposit(300);
        account.printStatement();

        let txns = [
            new Transaction(new Date(), 100, 100),
            new Transaction(new Date(), 200, 300),
            new Transaction(new Date(), 300, 600),
        ]
        expect(consoleMock).toBeCalledWith(print(txns));
    })

    it('withdraw money', () => {
        let account: Account = new Account();

        account.deposit(300);
        account.withdraw(200);
        account.printStatement();

        let txns = [
            new Transaction(new Date(), 300, 300),
            new Transaction(new Date(), -200, 100)
        ]
        expect(consoleMock).toBeCalledWith(print(txns));
    })

    it('throw error when withdraw money more than balance', () => {
        let account: Account = new Account();

        account.deposit(300);
        expect(() => account.withdraw(500)).toThrow(InsufficientMoney);
    })
})
