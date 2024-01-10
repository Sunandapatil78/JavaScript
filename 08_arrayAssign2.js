console.log("--------------------Step-1-----------------------");
const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumber);
console.log(`Length of Array is :${arrayNumber.length}`);

console.log("---------------------Step-2---------------------------");

let Array = arrayNumber.shift(0);

console.log(`First Element is:${Array}`);

let lastelement = arrayNumber[arrayNumber.length - 1];
console.log(`Last Element is :${lastelement}`);

console.log("----------------Step-3----------------------");
const arrayN = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
const Array1 = arrayN[arrayN.length - 3];
console.log(`Last Thired Element is :${Array1}`);

console.log("----------------Step-4----------------------");
console.log("All Even Number using for of loop  ");
const array = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
num = 0;
for (const num of array) {
  if (num % 2 === 0) {
    console.log(num);
  }
}
console.log("-----------------------Step=5--------------------------");
console.log("All Odd Number using for of loop  ");
const arrayA = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
num = 0;
for (const num of arrayA) {
  if (num % 2 !== 0) {
    console.log(num);
  }
}
console.log("----------------step-6--------------------");

let numbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
 let even=[];

for (const num1 of numbers) {
 let  sum=0;
  if(num1%2==0){
    console.log(`${num1}`);
    sum=sum+(numbers[num1])
console.log(numbers[num1]);
     even.push(num1)
   
  }
 
}


  




console.log("--------------------step-8----------------------------");
var myArr = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

 let sum=0;
 for (const index in myArr) {
    console.log(myArr[index]);
    sum=sum+(myArr[index])
 }
 console.log(`sum is:${sum}`);

 console.log("-----------------------step-9---------------------------");
 var myArray = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
 for (const Element of myArray) {
  if(Element%5==0){
  
   
  }
  console.log(Element);
 }



