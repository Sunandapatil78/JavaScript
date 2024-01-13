


function number (num) {
     if(num==0||num==1){
        return 1;
     }
     
     let result =1;
     for (let index = 1; index <=num; index++) {
        result =result*index;

        
     }
     return result;
}
     let result =number(6)
     console.log(result);