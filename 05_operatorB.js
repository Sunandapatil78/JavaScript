
function greaterNumber(a,b) {
    

var a=10;
var b= -10;
var result=a>b;
var res =a>b ? a:b;
console.log("Given Number Is :",a,b)
console.log("The Greater Num is: ",res);
}
greaterNumber()


console.log("               ");
function greaterNumber (){
    var a=800;
    var b= 899;
    var result=a>b;
    var res =a>b ? a:b;
    console.log("Given Number Is :",a,b)
    console.log("The Greater Num is: ",res);
}
greaterNumber()

console.log("---------------------Que=2-------------------------");

function isEvenOrOddNum(value)
 { return value % 2 == 0 ? "evenNum" : "oddNum"; }

console.log(" Given Value 29 is: " + isEvenOrOddNum(29));
console.log("                                     ");
console.log(" Given Value 44 is: " + isEvenOrOddNum(44));
console.log("                                     ");


console.log(" Given  Value 0 is: " + isEvenOrOddNum(0));
console.log("                                     ");
console.log(" Given  Value 101 is: " + isEvenOrOddNum(101));
 console.log("           ");
function wordLength(params) {
    var givenString ="JavaScript";
    console.log(` Given String is : ${givenString}` )
    var result =(givenString.length)
    console.log(` Length of string : ${result}`);
 console.log("               ");
    var givenString ="developer";
    console.log(` Given String is : ${givenString}` )
    var result =(givenString.length)
    console.log(` Length of string : ${result}`);

    console.log("                         ");

    var givenString ="Google";
    console.log(` Given String is : ${givenString}` )
    var result =(givenString.length)
    console.log(` Length of string : ${result}`);
}
wordLength()