
// 0 to 10 Numbers print
for (var index = 0; index <= 10; index++) {
    console.log(index);  
}

console.log(" 0 2 4 6 8 print to Number"); 
for (var index = 2; index <= 10;  index=index+2) {
    console.log(index);  
}
console.log("----------------------step=1 10t01----------------------------");

console.log(" 10 9 8 7 6 5 4 3 2 1 print to Number"); 
for (var index = 10; index >= 1;  index--) {
    console.log(index);  
}


console.log("----------------------step=1 50 to 40----------------------------");

console.log(" 50 49 48 47 46 45 44 43 42 41 40print to Number"); 
for (var index = 50; index >= 40;  index--) {
    console.log(index);  
}

console.log(" =============WAP to print the table of 5================= ");
for (var index = 5; index >= 50; index = index+5) {
    console.log(index);  
}


console.log(`========= Example of Infinite loop==============`);
// for (let index = 5; index < 10; index--) {
//    console.log(index); // 5 4 3 2 1 0 ----------
// }


for (let index = 0; index <=5; index++) {

    if(index==2){
        break;
    }
   console.log(index);
    
}