var age,gender;
var marriageEligiablity  = function(age,gender){
if (age>=18 && gender=='Female' || age>=21 && gender=='Male') {
    
    console.log(`${age} ${gender} Eligible For Marrige`);
} else {
    console.log(`${age} ${gender} Not Eligible for Marrige`);
}
}
marriageEligiablity(17,"Male");
marriageEligiablity(25,"Male");
marriageEligiablity(28,"Female");
marriageEligiablity(16,"Female");
marriageEligiablity(35,"Others");
marriageEligiablity(41,"Others");
marriageEligiablity(41,undefined);