function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }

  console.log(isPalindrome('madam'));
  console.log(isPalindrome('dad')); 
  console.log(isPalindrome('hello')); 
 console.log("***************************************************");


 

 function compare (a, b ) {
    y = a.split("").sort();
    z = b.split("").sort();
    

    for (i=0; i<y.length; i++) {
      if(y.length===z.length) {
        if (y[i]===z[i]){
          console.log(a + " and " + b + " are anagrams!");
          break;
        }
        else {
          console.log(a + " and " + b + " are not anagrams.");
          break;
        }
      }
    }
  }
  
  compare("silent", "listen");
  compare("hello", "world");
aelel.array.forEach(element => {
    
});
  