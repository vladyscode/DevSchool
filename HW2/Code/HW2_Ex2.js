function findEvenIndex (a){
    for (let i = 0; i < a.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        let countDown = i;
        let countUp = i;

        while (countDown > 0) {
            leftSum += a[countDown - 1]
            countDown--
        }

        while (countUp < a.length - 1) {
            rightSum += a[countUp + 1]
            countUp++
        }

        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
}

const a = [1, 100, 50, -51, 1, 1]
console.log(findEvenIndex(a))