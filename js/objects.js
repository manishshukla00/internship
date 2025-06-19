// const obj = {
//   name: "shami",
//   age: 20,
//   isActive: true,
//   hobbies: ["reading", "gaming", "coding"],
//   address: {
//     city: "Delhi",
//     state: "Delhi",
//     country: "India",
//   },
// };
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj).flat());

// // Assigning key value to objects
// let a = { a: 1, b: 2 };
// let b = { c: 3, d: 4 };
// let c = Object.assign(obj, a, b);
// console.log(c);
// console.log(Object.freeze(obj));

// a = { e: 1, f: 2 };
// console.log(Object.isFrozen(obj)); // This will not change the original object because it is frozen

// Distructuring

let arr = [1, 2, 3, 4];
let [a, b, c, d] = arr;
console.log(a, b, c, d); // 1 2 3 4

// Spread operator
let user = { name: "ashutosh" };
const updatedUser = { ...user, age: 20 };
console.log(updatedUser);
