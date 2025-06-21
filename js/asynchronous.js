setTimeout(() => {
  console.log("Hello, World! This is an asynchronous message.");
}, 5000);

let repeatTask = setInterval(() => {
  console.log("Hello, World! This is an asynchronous message.");
}, 5000);

console.log("after setTimeout and setInterval");

clearInterval(repeatTask);
