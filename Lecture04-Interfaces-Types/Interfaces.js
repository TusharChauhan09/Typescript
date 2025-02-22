// Using the interface
var person = { name: "Alice", age: 25 };
console.log(person);
var myCar = { brand: "Toyota", model: "Camry", year: 2022 };
// myCar.brand = "Honda"; // ❌ Error: Cannot assign to 'brand' because it is a read-only property.
console.log(myCar);
var employee = { name: "Bob", age: 30, role: "Developer" };
console.log(employee);
var dog = { species: "Dog" };
var car = { brand: "Honda", model: "Civic" };
console.log(dog);
console.log(car);
var add = function (a, b) { return a + b; };
console.log(add(5, 10)); // Output: 15
function printUser(user) {
    console.log("User: ".concat(user.name, ", Age: ").concat(user.age));
}
var user = { name: "Charlie", age: 28 };
printUser(user);
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
var circle = new Circle(10);
console.log(circle.getArea()); // Output: 314.159...
