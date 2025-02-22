"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// 1️ Regular Class Example (Non-abstract)
var StudentDetails = /** @class */ (function () {
    function StudentDetails(rollNumber, marks) {
        this.rollNumber = rollNumber;
        this.marks = marks;
    }
    Object.defineProperty(StudentDetails.prototype, "getMarks", {
        // Getter to access private property
        get: function () {
            return this.marks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StudentDetails.prototype, "setMarks", {
        // Setter to modify private property with validation
        set: function (score) {
            if (score < 0 || score > 100) {
                console.log("Invalid marks! Must be between 0 and 100.");
            }
            else {
                this.marks = score;
            }
        },
        enumerable: false,
        configurable: true
    });
    // Public method
    StudentDetails.prototype.showInfo = function () {
        console.log("Student Roll No: ".concat(this.rollNumber, ", Marks: ").concat(this.marks));
    };
    return StudentDetails;
}());
// 2️ Abstract Class (Cannot be instantiated directly)
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
// 3️ Derived Class Example (Extending Abstract Class)
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, id, salary) {
        var _this = _super.call(this, name, age) || this; // Call parent class constructor
        _this.id = id;
        _this.salary = salary;
        return _this;
    }
    Object.defineProperty(Employee.prototype, "getSalary", {
        // Getter for private property
        get: function () {
            return this.salary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "setSalary", {
        // Setter for private property with validation
        set: function (amount) {
            if (amount < 0) {
                console.log("Salary cannot be negative!");
            }
            else {
                this.salary = amount;
            }
        },
        enumerable: false,
        configurable: true
    });
    // Implementing Abstract Method
    Employee.prototype.getDetails = function () {
        return "Employee: ".concat(this.name, ", Age: ").concat(this.age, ", ID: ").concat(this.id);
    };
    return Employee;
}(Person));
// 4 Creating an Instance of StudentDetails
var student2 = new StudentDetails(101, 85);
student2.showInfo(); // ✅ Output: Student Roll No: 101, Marks: 85
console.log(student2.getMarks); // ✅ Get marks using getter
student2.setMarks = 95; // ✅ Update marks using setter
console.log(student2.getMarks); // Output: 95
student2.setMarks = 110; // ❌ Invalid marks!
// 5️ Creating an Instance of Employee
var emp = new Employee("Alice", 30, 201, 50000);
console.log(emp.getDetails()); // ✅ Access public method
console.log(emp.getSalary); // ✅ Get salary using getter
emp.setSalary = 55000; // ✅ Update salary using setter
console.log(emp.getSalary); // Output: 55000
emp.setSalary = -5000; // ❌ "Salary cannot be negative!"
