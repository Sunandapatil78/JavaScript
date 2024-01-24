

console.log("....................step=1..........................");
 
let arr = [20,11,40,25,23,11,9,31,60,2];

let modifiedArr = arr.map(function(element){
    return element +10;
});

console.log(modifiedArr); // [9, 12, 15, 18]
console.log("....................step=2..........................");
 
let arr1 = [20,11,40,25,23,11,9,31,60,2];
let newArr = arr1.map(el=> el*el*el);
console.log(newArr);
console.log("....................step=3..........................");

newArr.forEach((currentValue,index)=>{
console.log(currentValue,index);

})