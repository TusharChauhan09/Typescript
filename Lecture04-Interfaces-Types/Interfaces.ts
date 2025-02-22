// 1. Defining and Using Interfaces
interface Person {
    name: string;
    age: number;
  }
  
  const person: Person = { name: "Alice", age: 25 };
  console.log(person);
  
  // 2. Optional and Readonly Properties
  interface Car { 
    readonly brand: string; // Cannot be modified after initialization
    model: string;
    year?: number; // Optional property
  }
  
  const myCar: Car = { brand: "Toyota", model: "Camry" };
  // myCar.brand = "Honda"; // ❌ Error: Cannot assign to 'brand' because it is readonly
  console.log(myCar);
  
  // 3. Extending Interfaces
  interface Employee extends Person {
    role: string;
  }
  
  const employee: Employee = { name: "Bob", age: 30, role: "Developer" };
  console.log(employee);
  
  // 4. Interface vs Type Alias
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
