function highAndLow (a){
    const numbers = a.split(" ");
    for (let i = 0; i < numbers.length; i++){
        numbers[i] = Number(numbers[i]);
    } // const numbers = a.split(" ").map(Number);

    let max = numbers[0];
    let min = numbers[0];
    for (let n = 1; n < numbers.length; n++){
        if (numbers[n] > max){
            max = numbers[n];
        }
        if (numbers[n] < min){
            min = numbers[n];
        }
    } // const max = Math.max(...numbers);
      // const min = Math.min(...numbers);

    return max.toString() + " " + min.toString();
}

const numbersInStray = "1 2 3 4 5"; // pass the numbersInStray here
console.log(highAndLow(numbersInStray));