
// let person = {
//     firstName: "Gajanan",
//     age: 32,
//     isMarried: true
// }
// console.log(person);

// console.log(`Dot Notation`);
// console.log(person.firstName); // 
// console.log(`Square bracket Notation`);
// console.log(person["firstName"]); // 

// person.designation = "Tech Arch";
// console.log(person);


// person.age = 33; // Update
// console.log(person);

// person.isMarried = false;
// //console.table(person);

// //  delete property

// delete person.designation;
// console.table(person);

// //  empty object create 
// let address=
// {

// }
//  address.city=pune
//  console.log(address);

//  let user = {
//     userName: "Jenny",
//     country: "USA",
//     address: {
//         city: "Pune",
//         street: "Wakad",
//         pin: 411057,
//         getAddress: function(){
//            console.log(`Complete Address: ${this.flatNo}, ${this.street}, ${this.city}, ${this.pin}`); 
//         }
//     },
//     show: function(){
//         console.log(`Inside show function`);
//     }
// }
// console.log(user);
// let country = user.country;
// console.log(country);
// user.show();

// console.log(user.address.pin);
// user.address.flatNo = 308;
// console.log(user.address);

// user.address.getAddress();


// console.log(`====== Traversing an object ========`);
// let developer = {
//     firstName: "Gajanan",
//     age: 32,
//     isMarried: true,
//     skills: ["C", "CPP", "Core Java", "JavaScript", "Microservices" ]
// }
// for (const key in developer) {
//     if (Object.hasOwnProperty.call(developer, key)) {
//         const element = developer[key];
//         console.log(`Key ==> ${key}, Value ==> ${element}`);
//     }
// }

// console.log(developer.skills);

// const keys = Object.keys(developer);
// console.log(keys);

// const values = Object.values(developer);
// console.log(values);
// console.log(`Is 'values' array ==>  ${Array.isArray(values)}`);
// for (const element of values) {
//     console.log(element);  
// }

// console.log(`Object entries....`);
// const entries= Object.entries(developer);
// for (const element of entries) {
//     console.log(element);
// }
// console.log(`Accessing nested array element using double [] [] brackets`);
// console.log(entries[0][0]);
// console.log(entries[0][1]);

// console.log(`==== in operator =====`);
// const isAgeAvailable = "age" in developer;
// console.log(`Is age Available: ${isAgeAvailable}`);
// const isCityAvailable = "city" in developer;
// console.log(`Is city Available: ${isCityAvailable}`);

// const developer1 = {
//     firstName: "Gajanan",
//     age: 32,
//     isMarried: true
// }
// console.log(developer);
// developer.age = 34;
// console.log(developer);

// Not allowed
// developer = {

// }
console.log(`====== Object Freezing === `);
Object.freeze(developer);
developer.isMarried = false;
developer.firstName = "Jenny";
console.log(developer);

console.log(`======= const array ============`);
const array = [2, 3,4, 5];
console.log(array);
array[0] = 100;
console.log(array);
// array = [ 99, 77, 88 ]; // Not allowed

console.log(`=== Freezing an array ======`);
Object.freeze(array);
array[1] = 777;
console.log(array);