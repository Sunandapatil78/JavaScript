function factorialOfNum(num) {
  if (num == 0 || num == 1) {
    return 1;
  }

  if (num == null || num == undefined || num == NaN) {
    return `Invalid Input`;
  }
  let multiply = 1;
  for (let index = num; index >= 1; index--) {
    multiply = multiply * index;
  }
  return multiply;
}
console.log("--------------------- step=1 --------------------------");
let a = factorialOfNum(5);

console.log("The Factorial number is :", a);
console.log("                                     ");
let b = factorialOfNum(3);

console.log("The Factorial number is :", b);
console.log("                                     ");
let c = factorialOfNum(null);

console.log("The Factorial number is :", c);
console.log("                                     ");
let d = factorialOfNum(8);

console.log("The Factorial number is :", d);
console.log("                                     ");
let e = factorialOfNum(undefined);

console.log("The Factorial number is :", e);
console.log("                                     ");
let f = factorialOfNum(9);

console.log("The Factorial number is :", f);
console.log("                                     ");
let g = factorialOfNum(0);

console.log("The Factorial number is :", g);
console.log("                                     ");
function factorialOfWordsCount(word) {
  let res = word.split(" ");
  let result = res.length;
  return result;
}

function factorialOfWordsCount1(num) {
  if (num == 0 || num == 1) {
    return 1;
  }
  if (num == null) {
    return `Invalid Input`;
  }

  let result = 1;
  for (let index = 1; index <= num; index++) {
    result = result * index;
  }
  return result;
}

console.log(
  "--------------------------- step=2 --------------------------------"
);

let result1 = factorialOfWordsCount("Revision is the mother of Seccess");
console.log(`String word are:${result1}`);
console.log("                                     ");
let result2 = factorialOfWordsCount1(6);
console.log(`Factorial 6:${result2}`);

console.log("                                     ");

let result3 = factorialOfWordsCount(" we never fail,we always , mind it!");
console.log(`String word are:${result3}`);
console.log("                                     ");
let result4 = factorialOfWordsCount1(8);
console.log(`Factorial 8:${result4}`);
console.log("                                     ");
let result5 = factorialOfWordsCount1(null);
console.log(result5);
console.log("                                     ");

let result6 = factorialOfWordsCount1(" ");
console.log(`Empty String 0 is 1:${result6}`);

let result7 = factorialOfWordsCount("sunanda shatrughan patil");
console.log(`The word Full Name is:${result7}`);

let result8 = factorialOfWordsCount1(3);
console.log(`Factorial of Name word is:${result8}`);
