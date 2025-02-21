"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Named Function
function add(a, b) {
    return a + b;
}
// 2. Anonymous Function (Stored in a Variable)
var subtract = function (a, b) {
    return a - b;
};
// 3. Arrow Function (Shorter Syntax)
var multiply = function (a, b) { return a * b; };
// 4. Function with Optional & Default Parameters
function greet(name, age) {
    if (name === void 0) { name = "Tushar"; }
    return age ? "Hello ".concat(name, ", age ").concat(age) : "Hello ".concat(name);
}
// 5. Rest Parameters Function
function sumAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
// 6. Function with `void` Return Type
function logMessage(message) {
    console.log(message);
}
// 7. Function with `never` Return Type (Throws Error)
function throwError(msg) {
    throw new Error(msg);
}
// 8. Function as a Parameter (Callback Function)
function processNumbers(a, b, callback) {
    return callback(a, b);
}
// 9. Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("IIFE executed immediately!");
})();
function getUser() {
    return { name: "Alice", age: 25 };
}
// Calling Functions
console.log(add(5, 10));
console.log(subtract(15, 5));
console.log(multiply(3, 4));
console.log(greet("Alice"));
console.log(greet("Bob", 25));
console.log(sumAll(1, 2, 3, 4, 5));
logMessage("TypeScript is awesome!");
var user = getUser();
console.log(user);
console.log(processNumbers(10, 5, subtract)); // Passing a function as a parameter
