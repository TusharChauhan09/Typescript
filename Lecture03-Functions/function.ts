// 1. Named Function
function add(a: number, b: number): number {
    return a + b;
  }
  
  // 2. Anonymous Function (Stored in a Variable)
  const subtract = function (a: number, b: number): number {
    return a - b;
  };
  
  // 3. Arrow Function (Shorter Syntax)
  const multiply = (a: number, b: number): number => a * b;
  
  // 4. Function with Optional & Default Parameters
  function greet(name: string = "Tushar", age?: number): string {
    return age ? `Hello ${name}, age ${age}` : `Hello ${name}`;
  }
  
  // 5. Rest Parameters Function
  function sumAll(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  // 6. Function with `void` Return Type
  function logMessage(message: string): void {
    console.log(message);
  }
  
  // 7. Function with `never` Return Type (Throws Error)
  function throwError(msg: string): never {
    throw new Error(msg);
  }
  
  // 8. Function as a Parameter (Callback Function)
  function processNumbers(a: number, b: number, callback: (x: number, y: number) => number): number {
    return callback(a, b);
  }
  
  // 9. Immediately Invoked Function Expression (IIFE)
  (function () {
    console.log("IIFE executed immediately!");
  })();
  
  // 10. Function with Object as Parameter and Return Type
  type User = { name: string; age: number };
  function getUser(): User {
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
  
  let user = getUser();
  console.log(user);
  
  console.log(processNumbers(10, 5, subtract)); // Passing a function as a parameter
  

export {}