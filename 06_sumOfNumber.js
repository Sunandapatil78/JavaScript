

let sum=0;

for (i=1;i<11;i++){

    sum=sum+i;
}
console.log(`sum of number is:${sum}`);

// write a pro multipilction 1to 5

mult=1;
for (let index = 1; index <=5; index++) {
mult=mult+1
    
}
console.log();

console.log('=== Reading string char by char====');
let str = "Developer";
for (let index = 0; index < str.length; index++) {
    console.log(str.charAt(index)); 
}

let word = "Developer";
let result = "";
for (let index = word.length-1; index >=0; index--) {
     result = result + word.charAt(index); 
     //result = result.concat(word.charAt(index));
}
console.log(`Reverse string is: ${result}`);

let s1 = "Developer UI";
let vowelsCount =0;
for (let index = 0; index < s1.length; index++) {
    let char = s1.charAt(index).toLowerCase();
    if (char== 'a' || char== 'e'|| char== 'i'  || char== 'o' || char== 'u') {
        vowelsCount = vowelsCount + 1;
    }
}
console.log(`Vowels count is: ${vowelsCount}`);