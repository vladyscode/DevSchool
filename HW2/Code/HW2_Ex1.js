function largestRadialSum (people, d){
    let groupsSumHonor = [];

    for (let j= 0; j < people.length/d; j++){

        let i = j;
        let sum = 0;

        while (i <= people.length-1){
            sum += people[i];
            i+= people.length/d;
        }
        groupsSumHonor.push(sum);
    }
    return Math.max(...groupsSumHonor);
}

const people = [1, 5, 6, 3, 4, 2];
const d = 3;

if (people.length % d === 0 && 1 <= d <= 31 && people.length > 0){ // n === people.length
    console.log(largestRadialSum(people, d));
} else{
    console.log("Not right data");
}