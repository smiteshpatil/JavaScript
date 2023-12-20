const accountId = 12345;

let accountEmail = "dummyemailsmitesh@gmail.com";
var accountPassword = "abc123";
accountCity = "Pune";

// accountId = 3;
//constants cannot be changed

accountEmail = "smit@gmail.com"; // variables can be changed
accountPassword = "2121212";
accountCity = "Bengaluru";

//prints the tabular representation of all the variables
console.table([accountId, accountEmail, accountPassword, accountCity, x]);

// console.log(Name); // ReferenceError: Cannot access 'Name' before initialization
console.log(x); // works as variables are hoisted
let Name; // not hoisted
var x; // hoisted
