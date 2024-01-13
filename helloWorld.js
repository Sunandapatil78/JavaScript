// console.log("Hello js, I am sunanda patil");
// var num;

// num="10";
// console.log(num)


// var myname = "Sunanda";
// console.log(myname);
// console.log("first'name",myname)



var myName = "Sunanda Patil";
console.log("Full Name",myName);

console.log("Hello JS , I am Gajanan");

var myName; // Varibale Declartion
console.log(myName); // undefined

myName = "Gajanan"; // Variable Intialization
console.log("First Name: ",myName);

var age = "32"; // Varibale declaration and Initialization
console.log("Age:", age);

myName = "Gajanan Kharat"; // Varibale update
console.log("Full name: ", myName);









console.log("==================step1======================");

function area_of_square()
{
 var area = side * side;
 var side = 34;
 console.log("First function with no arg and no return type " );
}
  
area_of_square();


console.log("==================step1======================");                 

function myname(){

    var name ="myname";
    var myname="Sunanda";

    console.log("Secind function with no arg and no return type " );

}


function findLargest(num1, num2) {
    if (num1 >= num2 ) {
        return num1;
       function findLargest(num1, num2, num3) {
            if (num1 >= num2 && num1 >= num3) {
                return num1;
            } else if (num2 >= num1 && num2 >= num3) {
                return num2;
            } else {
                return num3;
            }
        }
         
        // Example usage
        const largestNumber = findLargest(10, 5, 8);
        console.log("Largest number:", largestNumber);
    }
}
 
// Example usage
const largestNumber = findLargest(10, 20, );
console.log("Largest number:", largestNumber);

function largestNumber(num1,num2){
    if (n1>=n2) {
         return num1;
    }
     
}
let largestNumber =large(10,20)
console.log(largestNumber);