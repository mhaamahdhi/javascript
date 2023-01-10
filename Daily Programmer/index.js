function fizzbuzz(n) {
    // a place to store the results (list, array)
    const results = [];

    for (let i = 1; i <= n; i+=1){

        let result ='';

        if (i % 3 === 0) {
            result += 'Fizz';
            
        }
        if ( i % 5 === 0 ){
            result += 'Buzz';
        }

        if (result) {
            results.push(result);

        }else {
            results.push(i);
        }
    }

    return results;
}


console.log(fizzbuzz(3))
console.log(fizzbuzz(5))
console.log(fizzbuzz(16))