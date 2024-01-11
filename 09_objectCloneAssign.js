
console.log("-------------------------step=1------------------------------");
const bankSbi={
    bankName:"State Bank Of India",
    Address:"Mangalwedha",
    Deposite:"fixde Dosite",
    Security:"ASBA"
    
}
console.log(bankSbi);
console.log("--------------------step=2--------------------------");
const bankLocation={
    street :"Killa Bhag, TALUKA, Mangalwedha, Maharashtra 413305",
    city:"Mangalwedha",
    pinCde:413305
}
console.log(bankLocation);
console.log("-------------step-3--------------------");
let newarray=Object.assign(bankSbi,",",bankLocation);
console.log(newarray); 
console.log("------------------step-4-----------------------");
const rateOfInterest={
    
     homeLoanInterest:"Up to 90% of the property cost",
     personalLoanInterest: "SBI Quick Personal Loan",
     dueInterest: "3.65% per month (43.8% per annum)",
}
    const newrateOfInterest  = Object.assign({},rateOfInterest)


console.log(newrateOfInterest);
console.log("---------------------step-5--------------------------");
const sbiDetails = Object.assign({},bankSbi,bankLocation,newrateOfInterest );

console.log(bankSbi)
console.log(bankLocation)
console.log(newrateOfInterest);

console.log("----------------------step-6-----------------------------");

const sbiDetail = Object.assign({},bankSbi,bankLocation,newrateOfInterest );

for (const value in sbiDetail) {
    let result= sbiDetail[value];

    console.log(`${result}`);
}


