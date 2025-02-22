// 1️ Regular Class Example (Non-abstract)
class StudentDetails {
    // Readonly property (Cannot be modified after initialization)
    readonly rollNumber: number;
    
    // Private property (Only accessible inside this class)
    private marks: number;
  
    constructor(rollNumber: number, marks: number) {
      this.rollNumber = rollNumber;
      this.marks = marks;
    }
  
    // Getter to access private property
    get getMarks(): number {
      return this.marks;
    }
  
    // Setter to modify private property with validation
    set setMarks(score: number) {
      if (score < 0 || score > 100) {
        console.log("Invalid marks! Must be between 0 and 100.");
      } else {
        this.marks = score;
      }
    }
  
    // Public method
    showInfo(): void {
      console.log(`Student Roll No: ${this.rollNumber}, Marks: ${this.marks}`);
    }
  }
  
  // 2️ Abstract Class (Cannot be instantiated directly)
  abstract class Person {
    constructor(protected name: string, protected age: number) {}
  
    // Abstract method (must be implemented by subclasses)
    abstract getDetails(): string;
  }
  
  // 3️ Derived Class Example (Extending Abstract Class)
  class Employee extends Person {
    // Readonly property
    readonly id: number;
  
    // Private property
    private salary: number;
  
    constructor(name: string, age: number, id: number, salary: number) {
      super(name, age); // Call parent class constructor
      this.id = id;
      this.salary = salary;
    }
  
    // Getter for private property
    get getSalary(): number {
      return this.salary;
    }
  
    // Setter for private property with validation
    set setSalary(amount: number) {
      if (amount < 0) {
        console.log("Salary cannot be negative!");
      } else {
        this.salary = amount;
      }
    }
  
    // Implementing Abstract Method
    getDetails(): string {
      return `Employee: ${this.name}, Age: ${this.age}, ID: ${this.id}`;
    }
  }
  
  // 4 Creating an Instance of StudentDetails
  const student2 = new StudentDetails(101, 85);
  student2.showInfo(); // ✅ Output: Student Roll No: 101, Marks: 85
  console.log(student2.getMarks); // ✅ Get marks using getter
  
  student2.setMarks = 95; // ✅ Update marks using setter
  console.log(student2.getMarks); // Output: 95
  
  student2.setMarks = 110; // ❌ Invalid marks!
  
  // 5️ Creating an Instance of Employee
  const emp = new Employee("Alice", 30, 201, 50000);
  
  console.log(emp.getDetails()); // ✅ Access public method
  console.log(emp.getSalary); // ✅ Get salary using getter
  
  emp.setSalary = 55000; // ✅ Update salary using setter
  console.log(emp.getSalary); // Output: 55000
  
  emp.setSalary = -5000; // ❌ "Salary cannot be negative!"
  

export {}