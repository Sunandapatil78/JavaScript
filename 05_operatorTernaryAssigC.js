function maleMarrigeEligibility(gender, age, boyName) {
  var result = (gender =
    "male" && age >= 21
      ? `Hey ${boyName}  Eligible For Marrige`
      : `Hey ${boyName} Not Eligible For Marrige `);
  console.log(result);
}
maleMarrigeEligibility("male", "25", "Billgates");
console.log("                           ");

maleMarrigeEligibility("male", "17", "Stew Jobs");


console.log("-----------------step=2-----------------------");

function femaleMarrigeEligibility(gender ,age,girlName) {
     var result= gender="female"&&age>=18 
     if (age>=18) {
        console.log(`Hey ${girlName}  Eligible For Marrige`);

     } else {
        
       console.log( `Hey ${girlName} Not  Eligible For Marrige`);
     }
       
}
femaleMarrigeEligibility("Female","16","jenifer")
console.log("                                   n");

femaleMarrigeEligibility("Female","27","Malinda Gates")
    
