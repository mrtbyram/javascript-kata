import {print} from "./printer";
import {Transaction} from "./transaction";

describe('printer tests', () => {
    it('print empty transaction', () => {
        console.log(print([]));
    })

    it('print single transaction', () => {
        console.log(print([new Transaction(new Date('1987-01-09'), 100, 100)]));
    })
})
