// 1️⃣ `typeof` Type Guard (Checking Primitives)
function processValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase()); // ✅ TypeScript knows value is a string
    }
    else {
        console.log(value.toFixed(2)); // ✅ TypeScript knows value is a number
    }
}
processValue("hello"); // Output: HELLO
processValue(42); // Output: 42.00
// 2️⃣ `instanceof` Type Guard (Checking Instances of Classes)
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving...");
    };
    return Car;
}());
var Bike = /** @class */ (function () {
    function Bike() {
    }
    Bike.prototype.ride = function () {
        console.log("Riding...");
    };
    return Bike;
}());
function useVehicle(vehicle) {
    if (vehicle instanceof Car) {
        vehicle.drive(); // ✅ TypeScript knows it's a Car
    }
    else {
        vehicle.ride(); // ✅ TypeScript knows it's a Bike
    }
}
useVehicle(new Car()); // Output: Driving...
useVehicle(new Bike()); // Output: Riding...
function makeSound(animal) {
    if ("bark" in animal) {
        animal.bark(); // ✅ TypeScript knows it's a Dog
    }
    else {
        animal.meow(); // ✅ TypeScript knows it's a Cat
    }
}
makeSound({ bark: function () { return console.log("Woof!"); } }); // Output: Woof!
makeSound({ meow: function () { return console.log("Meow!"); } }); // Output: Meow!
// 4️⃣ Literal Type Narrowing (Checking Exact Values)
function printStatus(status) {
    if (status === "success") {
        console.log("✅ Operation was successful!");
    }
    else {
        console.log("❌ Operation failed!");
    }
}
printStatus("success"); // Output: ✅ Operation was successful!
printStatus("error"); // Output: ❌ Operation failed!
function isFish(pet) {
    return pet.swim !== undefined;
}
function move(pet) {
    if (isFish(pet)) {
        pet.swim(); // ✅ TypeScript knows it's a Fish
    }
    else {
        pet.fly(); // ✅ TypeScript knows it's a Bird
    }
}
move({ swim: function () { return console.log("Swimming..."); } }); // Output: Swimming...
move({ fly: function () { return console.log("Flying..."); } }); // Output: Flying...
function getArea(shape) {
    switch (shape.kind) {
        case "square":
            return shape.size * shape.size;
        case "circle":
            return Math.PI * shape.radius * shape.radius;
    }
}
console.log(getArea({ kind: "square", size: 5 })); // Output: 25
console.log(getArea({ kind: "circle", radius: 3 })); // Output: 28.27
// 7️⃣ Strict Equality Check (`===`)
function checkValue(x) {
    if (x === undefined) {
        console.log("Value is undefined!");
    }
    else {
        console.log("Value is: ".concat(x));
    }
}
checkValue(undefined); // Output: Value is undefined!
checkValue("Hello"); // Output: Value is: Hello
