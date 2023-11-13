function groupAnagrams(words){
    function sortWord(word){
        let charlist = word.split("");
        return charlist.sort().join("");
    }

    let anagrams = [];
    let sort = [];

    for (const word of words){
        if (sort.some((el) => el === sortWord(word))){
            const el = sort.find((el) => el === sortWord(word));
            anagrams[sort.indexOf(el)].push(word);
        }
        else{
            anagrams.push([word]);
            sort.push(sortWord(word));
        }
    }

    return anagrams;
}

const a = ["tsar", "rat", "tar", "star", "tars", "cheese"];
console.log(groupAnagrams(a))