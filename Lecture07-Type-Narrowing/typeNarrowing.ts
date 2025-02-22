// 1️⃣ `typeof` Type Guard (Checking Primitives)
function processValue(value: string | number) {
    if (typeof value === "string") {
      console.log(value.toUpperCase()); // ✅ TypeScript knows value is a string
    } else {
      console.log(value.toFixed(2)); // ✅ TypeScript knows value is a number
    }
  }
  
  processValue("hello"); // Output: HELLO
  processValue(42);      // Output: 42.00
  
  // 2️⃣ `instanceof` Type Guard (Checking Instances of Classes)
  class Car {
    drive() {
      console.log("Driving...");
    }
  }
  
  class Bike {
    ride() {
      console.log("Riding...");
    }
  }
  
  function useVehicle(vehicle: Car | Bike) {
    if (vehicle instanceof Car) {
      vehicle.drive(); // ✅ TypeScript knows it's a Car
    } else {
      vehicle.ride(); // ✅ TypeScript knows it's a Bike
    }
  }
  
  useVehicle(new Car());  // Output: Driving...
  useVehicle(new Bike()); // Output: Riding...
  
  // 3️⃣ `in` Operator (Checking Properties in Objects)
  type Dog = { bark: () => void };
  type Cat = { meow: () => void };
  
  function makeSound(animal: Dog | Cat) {
    if ("bark" in animal) {
      animal.bark(); // ✅ TypeScript knows it's a Dog
    } else {
      animal.meow(); // ✅ TypeScript knows it's a Cat
    }
  }
  
  makeSound({ bark: () => console.log("Woof!") }); // Output: Woof!
  makeSound({ meow: () => console.log("Meow!") }); // Output: Meow!
  
  // 4️⃣ Literal Type Narrowing (Checking Exact Values)
  function printStatus(status: "success" | "error") {
    if (status === "success") {
      console.log("✅ Operation was successful!");
    } else {
      console.log("❌ Operation failed!");
    }
  }
  
  printStatus("success"); // Output: ✅ Operation was successful!
  printStatus("error");   // Output: ❌ Operation failed!
  
  // 5️⃣ Type Predicate (`is` Operator)
  type Fish = { swim: () => void };
  type Bird = { fly: () => void };
  
  function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }
  
  function move(pet: Fish | Bird) {
    if (isFish(pet)) {
      pet.swim(); // ✅ TypeScript knows it's a Fish
    } else {
      pet.fly();  // ✅ TypeScript knows it's a Bird
    }
  }
  
  move({ swim: () => console.log("Swimming...") }); // Output: Swimming...
  move({ fly: () => console.log("Flying...") });    // Output: Flying...
  
  // 6️⃣ Discriminated Union (Common Property for Type Checking)
  type Square = { kind: "square"; size: number };
  type Circle = { kind: "circle"; radius: number };
  
  function getArea(shape: Square | Circle) {
    switch (shape.kind) {
      case "square":
        return shape.size * shape.size;
      case "circle":
        return Math.PI * shape.radius * shape.radius;
      default:
        const _defaultShape: never = shape;
        return _defaultShape;
    }
  }
  
  console.log(getArea({ kind: "square", size: 5 }));  // Output: 25
  console.log(getArea({ kind: "circle", radius: 3 })); // Output: 28.27
  
  // 7️⃣ Strict Equality Check (`===`)
  function checkValue(x: string | undefined) {
    if (x === undefined) {
      console.log("Value is undefined!");
    } else {
      console.log(`Value is: ${x}`);
    }
  }
  
  checkValue(undefined); // Output: Value is undefined!
  checkValue("Hello");   // Output: Value is: Hello
  