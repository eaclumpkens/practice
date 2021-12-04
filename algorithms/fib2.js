const fibonacci = num => {
    const result = [ 0, 1 ];
    for ( let i = 2; i <= num; i++ ){
        const num1 = result[i - 1];
        const num2 = result[i -2];
        result.push(num1 + num2);
    }

    console.log(result);
};

fibonacci(10);