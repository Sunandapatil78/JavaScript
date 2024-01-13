
function countVowels(str) {
    const vowels = "a,e,i,o,u";
    return str.split("").reduce(function (count, char) {
        return vowels.indexOf(char) ?
        count + 1 : count;}, 0)
    
}
const result = countVowels("Developer");
console.log(result)