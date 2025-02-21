let greetings: string = "Hello Tushar";
// error
// greetings = 1
console.log(greetings);


// 1. Primitive Types
let age: number = 25;
let price: number = 199.99;
let firstName: string = "Alice";
let isLoggedIn: boolean = true;

// 2. Special Types
let randomValue: any = "Hello"; // Avoid using 'any'
let userInput: unknown = 42;
let emptyValue: null = null;
let notAssigned: undefined = undefined;

// 3. Complex Types
let numbers: number[] = [1, 2, 3, 4, 5]; // Array
let names: Array<string> = ["Alice", "Bob"]; // Generic Array Syntax

// Tuple (Fixed-length array)
let person: [string, number] = ["Alice", 30];

// Object Type
let user: { name: string; age: number } = {
  name: "Alice",
  age: 25,
};

// 4. Function Types
function add(a: number, b: number): number {
  return a + b;
}

// Optional and Default Parameters
function greet(name: string = "Tushar", age?: number): string {
  return age ? `Hello ${name}, age ${age}` : `Hello ${name}`;
}

// 5. Union Types
let id: string | number;
id = "abc123"; // ✅ Allowed
id = 456;      // ✅ Allowed

let id2: string & number;
id = "abc123"; // ✅ Allowed
id = 456;      // ✅ Allowed

// 6. Type Assertions
let someValue: unknown = "Hello, TypeScript";
let strLength: number = (someValue as string).length;

console.log(age, price, firstName, isLoggedIn);
console.log(numbers, names, person, user);
console.log(add(5, 10));
console.log(greet("Alice"));
console.log(id, strLength);


export{}