function descendingOrder (a){
    const numbers = a.toString().split("");
    for (let i = 0; i < numbers.length; i++){
        numbers[i] = Number(numbers[i]);
    } // let numbers = a.toString().split("");

    let stepsCount = numbers.length - 1;
    let swapped;
    do {
        swapped = false;
        for (let n = 0; n < stepsCount; n += 1) {
            if (numbers[n] < numbers[n + 1]) {
                const temp = numbers[n];
                numbers[n] = numbers[n + 1];
                numbers[n + 1] = temp;
                swapped = true;
            }
        }
        stepsCount -= 1;
    } while (swapped); // numbers = numbers.sort((a, b) => b - a);

    return Number(numbers.join(""));
}

const startNumber = 5476; // pass the number here
console.log(descendingOrder(startNumber));