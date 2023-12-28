console.log("==================step1======================");

function area_of_square()
{
 var area = side * side;
 var side = 34;
 console.log("First function with no arg and no return type " );
}
  area_of_square();


console.log("==================second======================");                 

function myname(){

    var name ="myname";
    var myname="Sunanda";

    console.log("Secind function with no arg and no return type " );

}

myname();


console.log("=====================step -2=================================");

function personalDetails(firstName,lastName,collageName){

  console.log("First Name :",firstName,',',"Last Name :",lastName,',',"Collage Name :",collageName);
}
  personalDetails("Sunanda","Patil"," Allana Institute Of Management Sciences,pune")

  console.log("=====================step -3=================================");

  function swapValue(value1,value2){
    console.log("Before swapValue is :" ,value1 ,value2 );
      
    temp = value1;

    value1=value2;

    value2=temp;
    
    console.log("After Swap Value :" ,value1 ,value2);
    
  }
   swapValue(" Virat ", "Anushka");

   console.log("==============================================")

   function swapValue(n1,n2) {

    console.log("Before Swap Value :",n1,n2);

    temp =n1;
    n1 = n2;

    n2 = temp;
    
    console.log("After Swap Value :" ,n1,n2);
    
   }
     swapValue(1000,2000)

     console.log('====================step-4=======================');

     function addThreeValues (V1,V2,V3) {

      console.log("Function Value is:" ,V1,V2,V3);

     }
       addThreeValues(10.23,600,40)

       addThreeValues("Hello", "Good"," Morning")
  