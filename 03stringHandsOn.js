

function stringHandsOn(params) {
var givenString =" Revision is the mother of  Success "
console.log(` 1.Given String is : ${givenString}` )
var result =(givenString.length)
console.log(` 2.Length of string : ${result}`);

result=  givenString . trim();
console.log(` 3.String trim is :${result}`);
console.log( ` After Trim :${result.length}`);

var givenString = "Hey you are doing good, keep it up";
var result = givenString.split(" ") .length;
console.log(` 4.Total words Extra Space in string is: ${result}`);


var givenString = "Hey you are doing good, keep it up";
 
result = (givenString.charAt(0) )

result1 =givenString .charAt(givenString .length -1)

console.log(` 5.First Char is: ${result}  , Last Char is : ${result1}`);


var givenString = "Hey you are doing good, keep it up";
var result = givenString.split(" ") ,length;

console.log(` 6.Total words in string is: ${result.length}`);

var givenString = "Hey you are doing good, keep it up";
var indexOfgood = givenString.indexOf('good');
console.log(` 7.Index of  word "Good" is:  ${indexOfgood}` );


var givenString = "Hey you are doing good, keep it up";

  result = givenString.substring (22);

  res = givenString.slice(22);
   
  console.log(` 8.Print the substring strating from index 22 :${result} ,Print the substring strating from index 22${res} `);

  
  var givenString = "  Hey you are doing good, keep it up  ";
 
  result = givenString.endsWith ("up");
  console.log(` 9.Print the substring End with word : ${result}`);



  var givenString = "  Hey you are doing good, keep it up  ";
 
  result = givenString.startsWith ("Hey");
  console.log(` 10.Print the substring End with word : ${result}`);

  
}
stringHandsOn()