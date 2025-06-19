// Array Methods
const arr = [1, 2, 3, 4, 5, 5, 2, 1, 3, 4];
console.log(arr);

const arr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(arr2);

// console.log(arr.length);
// console.log(arr2.push(10), arr2);
// console.log(arr2.pop(), arr2);
// console.log(arr2.unshift(0), arr2);
// console.log(arr2.shift(), arr2);

// console.log(arr2.includes(5));
// let ispresent = arr2.includes(5);
// console.log(ispresent);

// console.log(arr.lastIndexOf(5));
// const obj = {};
// console.log(obj);

// const user = [
//   {
//     id: 1,
//     name: "shami",
//   },
//   { id: 2, name: "manish" },
//   { id: 3, name: "ashutosh" },
//   { id: 4, name: "saurabh" },
// ];

// const findOut = user.find((elem) => elem.name === "ashutosh");
// console.log(findOut);

// const forEachLoop = arr2.forEach((elem) => console.log(elem * 2));

// console.log(arr2, arr2.sort());

// filter/

// const filterData = arr2.filter((elem) => elem % 2 === 0);

// console.log(filterData);

// // Reduce method

// const reduceData = arr2.reduce((acc, elem) => acc + elem, 0);
// /*
// acc+ elem = acc
// 0+1 =1
// 1+2 = 3
// 3+3 = 6
// .
// .
// .
// . so on
// */

// console.log(reduceData);

// Hoisting
// console.log(a);

// let a;
//  Cannot access 'a' before initialization
// var a;
// undefined

// const a;
// Missing initializer in const declaration

// Functions in javascript

// early function declaration
// function add(a, b) {
//   return a + b;
// }

// Arrow function
const add = (a, b) => a + b;

let sum = add(10, 20);
console.log(sum);
