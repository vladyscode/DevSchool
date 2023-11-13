function isPrime(n){
    if (n <= 1){
        return false;
    }
    for (let i = 2; i < n; i++){
        if (n % i === 0){
            return false;
        }
    }
    return true;
}

const Number = 2; // pass the number here
console.log(isPrime(Number));