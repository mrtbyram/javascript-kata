export default function fizzBuzz(a?: number){
    let response: string = '';

    if(a && a % 3 === 0){
       response += 'Fizz';
    }

    if(a && a % 5 === 0){
        response += 'Buzz';
    }

    return response.length == 0 ? a?.toString() : response;
}
