
const show=()=>{
    console.log(`No args and No return value is:${"Good Morning ,Today is Thursday"} `);
    console.log("Good Morning ,Today is Thursday");
}   
show();
console.log("........................Step-2.............................");
console.log("with 3 args and no return value ,for received 3 parameters perform the multiplication");

const multiply =( n1,n2,n3)=>{
    console.log(`Multiplication is: ${n1*n2*n3}`);

}
multiply(5,5,2);
multiply (10,4,1)


const additionNum=( n1,n2,n3,n4,n5)=>{
  const resultvalue= n1+n2+n3+n4+n5;
   
  return resultvalue;

}
const returnValue = additionNum(100,100,200,349,756);

console.log(`Addition value is :${returnValue}`);

console.log("Invoke the same arrow function value ");

const arrowFun=(inputValue)=>{
     console.log(`Call the values is :${inputValue}`);     
}
arrowFun("I am learing ES6 features indepth")