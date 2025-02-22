"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Tushar";
// error
// greetings = 1
console.log(greetings);
// 1. Primitive Types
var age = 25;
var price = 199.99;
var firstName = "Alice";
var isLoggedIn = true;
// 2. Special Types
var randomValue = "Hello"; // Avoid using 'any'
var userInput = 42;
var emptyValue = null;
var notAssigned = undefined;
// 3. Complex Types
var numbers = [1, 2, 3, 4, 5]; // Array
var names = ["Alice", "Bob"]; // Generic Array Syntax
// Tuple (Fixed-length array)
var person = ["Alice", 30];
// Object Type
var user = {
    name: "Alice",
    age: 25,
};
// 4. Function Types
function add(a, b) {
    return a + b;
}
// Optional and Default Parameters
function greet(name, age) {
    if (name === void 0) { name = "Tushar"; }
    return age ? "Hello ".concat(name, ", age ").concat(age) : "Hello ".concat(name);
}
// 5. Union Types
var id;
id = "abc123"; // ✅ Allowed
id = 456; // ✅ Allowed
var id2;
id = "abc123"; // ✅ Allowed
id = 456; // ✅ Allowed
// 6. Type Assertions
var someValue = "Hello, TypeScript";
var strLength = someValue.length;
console.log(age, price, firstName, isLoggedIn);
console.log(numbers, names, person, user);
console.log(add(5, 10));
console.log(greet("Alice"));
console.log(id, strLength);
