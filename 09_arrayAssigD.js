let professor = {
  firstName: "sunanda",
  lastName: "patil",
  Address: "Pune",
  Email: "sunanda@gmail.com",
  pin: 41101,
  degrees: {
    engreeing: "CSS",
    PHD: "Adv Computing",
    Institute: "Codemind",
  },

  certificate: [
    "Hacker Rank Participation",
    "Certificate in IFE course",
    "Certificate in Adv programming",]
    
  


};

console.log(professor);
console.log("                  ");
console.log(professor.degrees);
console.log("                             ");
console.log(professor.certificate);
professor.totalExperience ="14 years";
console.log("                                      ");
console.log(   `Total Experience is:${professor.totalExperience}`);
professor.Email="Sunandapatil@gmail.com";
console.log("                                 ");
console.log( `Modify Email :${professor.Email}`);
console.log(" --      ");
 professor.certificate.splice(2,0,"Oracle certified");

console.log(professor.certificate );
console.log("                              ");

let result= professor.certificate[professor.certificate.length-1]

 console.log(`The Last Element of Array is:${result}`);
 console.log("                                       ");

 console.log(professor);
 console.log("                   ");



  let certificate= [
    "Hacker Rank Participation",
    "Certificate in IFE course",
    "Certificate in Adv programming",]
     for (const iterator of certificate) {
        
     }
 
console.log(certificate);
 