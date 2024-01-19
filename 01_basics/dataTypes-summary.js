/*
#Primitive
    string, Number, Boolean, null, undefined,Symbol,Bigint 

    const id = Symbol("123") // used to uniquely identify objects
    const id2 = Symbl("123") / creates different object everytime
    const bigNumber = 238475482537492048574n // add n at end

#Reference (Non-primitive)
    Array, Objects, Functions    
*/

const heros = ["ironMan", "Spider Man", "Captain America"];

let myObject = {
  name: "Smitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello World!");
};

console.log(typeof heros);
console.log(typeof myObject);
console.log(typeof myFunction);

/**
 * Stack(Primitive), Heap(Non-Primitive)
 *
 */

let name = "Smitesh";
let anotherName = "Patil";

let obj1 = {
  email: "smiteshp2001@gmail.com",
  id: "1",
};

let obj2 = obj1; // Points to the same oject
obj2.email = "smiteshp101@gmail.com";

console.log(obj1.email);
console.log(obj2.email);
