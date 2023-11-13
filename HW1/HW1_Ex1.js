function solution(a){
    let sum = 0;

    for(let i = 0; i < a; i++){
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    return sum;
}

const Number = 10; // pass the number here
console.log(solution(Number));