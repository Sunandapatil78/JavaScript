console.log("--------------First And Last Element ------------------------------");
const arr = ["Banana" ,"orange","Apple","Mango","Water Melon"]

const first = arr[0];

const last = arr[arr.length - 1];
console.log(`FIrst Element is:"${first}"  Last Element is:'${last}'`); 

console.log("--------------------Step-2----------------------------------");
  
const fruits_seasonal=["Banana" ,"orange","Apple","Mango","Water Melon"]
 fruits_seasonal.unshift("papaya")
 console.log(fruits_seasonal);

console.log("-----------------------Step-3-------------------------");
const fruits_sea=["Banana" ,"orange","Apple","Mango","Water Melon"]
 
const removed = fruits_sea.splice(3,1)

console.log(`Original Element :[${fruits_sea}]`);

console.log(`Removed Element is:"${removed}"`);

console.log("----------------------step-4-------------------");


fruits_sea.push("pineapple");
console.log(fruits_sea);

console.log("----------------------Step-5-----------------------------");
const fruits=["Banana" ,"orange","Apple","Mango","Water Melon"]
fruits.splice(4,0,"Dragon fruit");
console.log(fruits);

console.log("-----------------------step-6------------------------------");
const fruitsName=["Banana" ,"orange","Apple","Mango","Water Melon"]

const replace=fruitsName.indexOf('orange')

fruitsName[replace] ='kiwi';
console.log(fruitsName);
console.log("----------------------------step-7-----------------------------------");

let fruitsN=["Banana" ,"orange","Apple","Mango","Water Melon"]
let Add=fruitsN.slice(1);
console.log(Add);
console.log("-----------------------------step-8-----------------------------------------");
            let arrayNN=["Banana" ,"orange","Apple","Mango","Water Melon"]
           let sl= arrayNN.slice(arrayNN.length-3);
           console.log(sl);



           let array=[11,22,33,44,55,66]
           for (const key in object) {
            
            }
            console.log(key);
           