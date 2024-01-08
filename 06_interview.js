

function interviewEligibility (gradScore,hscScore,sscScore,candidateName){
    if (gradScore>=70 || hscScore>=80  || sscScore>=90) {
    
        console.log(`${candidateName} Congrates Your eligible for TCS interview`);
    } else {
        console.log(`Unfortunately ${candidateName}  you are Not  Eligible for Interview`);
    }

}
interviewEligibility("80", "86", "90", "Sunanda");
interviewEligibility("70","65","55","Neha");
interviewEligibility("60","79","88","Aayush");