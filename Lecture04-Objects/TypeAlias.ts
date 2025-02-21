// 1. Basic Type Alias
type Age = number;

let myAge: Age = 25;
console.log(myAge); // Output: 25

// 2. Type Alias for Objects
type Person = {
  name: string;
  age: number;
};

const person: Person = { name: "Alice", age: 30 };
console.log(person);

// 3. Type Alias for Union Types
type ID = string | number;

let userID: ID = 101;
userID = "ABC123"; // ✅ Allowed
// userID = true; // ❌ Error: must be string or number

console.log(userID);

// 4. Type Alias for Function Signatures
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (x, y) => x + y;
console.log(add(10, 5)); // Output: 15

// 5. Type Alias for Intersection (Combining Types)
type Employee = Person & { role: string };

const employee: Employee = { name: "Bob", age: 28, role: "Developer" };
console.log(employee);

// 6. Type Alias with Arrays
type StringArray = string[];

const fruits: StringArray = ["Apple", "Banana", "Mango"];
console.log(fruits);

// 7. Type Alias vs Interface
interface Animal {
  species: string;
}

type Vehicle = {
  brand: string;
  model: string;
};

const dog: Animal = { species: "Dog" };
const car: Vehicle = { brand: "Honda", model: "Civic" };

console.log(dog);
console.log(car);

export {}