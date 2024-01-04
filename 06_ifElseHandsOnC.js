console.log("                        ");
var isEvenOrOddNum = function (num) {
  num % 2 == 0;
  if (num % 2 == 0) {
    return "EVEN";
  } else {
    return "ODD";
  }
};
var result = isEvenOrOddNum(45);
console.log(`45 is Given Number is ${result} `);

var result = isEvenOrOddNum(70);
console.log(`70 is Given Number is ${result} `);

var result = isEvenOrOddNum(67);
console.log(`67 is Given Number is ${result} `);

var result = isEvenOrOddNum(98);
console.log(`98 is Given Number is ${result} `);

console.log("--------------------------step=2--------------------------------");

var VisisbleForvote = function (age) {
  age >= 18;
  if (age >= 18) {
    return "Eligible for vote";
  } else {
    return "Not  Eligible for vote";
  }
};



var result = VisisbleForvote("18");
console.log(`18 person is Eligible for vote :${result}`);

var result = VisisbleForvote("20");
console.log(`20 person is Eligible for vote :${result}`);

var result = VisisbleForvote("17");
console.log(`17 person is Eligible for vote :${result}`);

var result = VisisbleForvote("40");
console.log(`40 person is Eligible for vote :${result}`);
 console.log("----------------------step=3--------------------------");
let s = "  Javascript  ";
let l = s.length;
if (l > 10) {
  console.log("String having more than 10 characters");
} else {
  console.log("String having less than 10 characters");
}



console.log("----------------------------step=4---------------------------------"); 


  var checkStart = function (word){
   
   if  (word.startsWith ("Java")){

    console.log(`Given word -${word} starts with "Java"`);

   } else{
    console.log(`Given word Not -${word} starts with "Java"`)
   }
}
  checkStart("JavaScript Language")