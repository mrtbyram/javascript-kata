export default function add(numbers: string){
    if(numbers.length == 0) return ''

    let delimiter: string|RegExp = /,|\n/;

    if(numbers.startsWith('//')){
        let parts = numbers.split('\n');
        delimiter = parts[0].slice(2)
        numbers = numbers.slice(numbers.indexOf(delimiter) + delimiter.length);
    }

    return numbers
        .split(delimiter)
        .map(n => new Number(n).valueOf())
        .reduce((prev, curr) => {
            if (!prev || !curr) throw new Error('invalid')
            return prev + curr;
        }, 0);
}
