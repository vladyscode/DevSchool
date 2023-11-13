function findNb(m){
    for (let n = 1;; n++){
        if (m > 0){
            m -= n**3;
        } else if (m === 0){
            return n-1;
        } else if (m < 0){
            return -1;
        }
    }
}

const Number = 1071225; // pass the number here
console.log(groupAnagrams(Number));