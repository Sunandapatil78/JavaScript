
let array = [11, 22, 33, 44, 55, 66, 77];
console.log(`Traversing an array using for in loop..`);
let sum=0;
for (const index in array) {
   console.log(array[index]);
   sum=sum+(array[index])
}
console.log(`sum is:${sum}`);

// find the sum of Array example
let array0=[12,34,55,65,77,87,89,]
  let sum1 =0;
for (const index in array0) {
   console.log(array0[index]);
   sum1=sum1+(array0[index]);
   
}
console.log(`Sum of the Element is:${sum1}`);




console.log(`Traversing an array using for of loop..`);
let array1 = [11, 22, 33, 44, 55, 66, 77];
for (const element of array1) {
    console.log(element);
    
}

let arrayNumber = [4, 5, 6, 7, 3]
console.log(`Traversing an array using for of loop..`);

sum=0
for (const element of arrayNumber) {
     sum=sum+(arrayNumber[element]%2==0)
   console.log(sum); 
}


console.log(``);
const str="Developer and UI  Backend"

const vowels="aeiou"
let count=0;


// console.log(`==== WAP to count the vowels from the given string=======`);
// const str = "Developer UI and Backend";
// const vowels = "aeiou";
// let count = 0;
// for (const char of str) {
//     console.log(char);
//     if (vowels.includes(char.toLowerCase())) {
//         count++;
//     }
// }
// console.log(`Vowels count is: ${count}`);

console.log("---------------join method----------------");
let arrayOfFriends = ["Jenny", "Elon", "Bill"];
const result = arrayOfFriends.join(",");
console.log(typeof result);
console.log(result);

console.log('--------------------Reverse Method---------------------');
arrayOfFriends.reverse();
console.log(arrayOfFriends);


let word="developer UI and Backend"
 let arrayword =word.split(" ");
console.log(arrayword.length);
word.split("")

let reversestr= word.split(" ").reverse().join(" ")
console.log(reversestr);

arrayOfFriends.reverse();
console.log(arrayOfFriends);

const word1 = "Developer UI and Backend";
const arrayOfWords = word.split(" ");
console.log(arrayOfWords.length);

const reverseStr = word1.split("").reverse().join("");
console.log(reverseStr);