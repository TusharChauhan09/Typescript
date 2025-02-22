// 1️ Why Generics? (A function that works with multiple types)
function identity<T>(value: T): T {
  return value;
}

console.log(identity(42));    // Output: 42
// OR   
console.log(identity<string>("Hello")); // Output: Hello

// 2️ Generic Function (Reusable with any type)
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const mergedObj = merge({ name: "Alice" }, { age: 25 });
console.log(mergedObj); // Output: { name: 'Alice', age: 25 }

// 3️ Generic Class
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  removeItem(item: T): void {
    this.data = this.data.filter(i => i !== item);
  }

  getItems(): T[] {
    return this.data;
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Apple");
textStorage.addItem("Banana");
textStorage.removeItem("Apple");
console.log(textStorage.getItems()); // Output: ["Banana"]

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
console.log(numberStorage.getItems()); // Output: [10, 20]

// 4️ Using Constraints in Generics (Extends)
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log(`Length: ${item.length}`);
}

logLength("Hello"); // ✅ Works, because string has length
logLength([1, 2, 3]); // ✅ Works, because arrays have length
// logLength(100); // ❌ Error: Number does not have length

// 5️ Generic Function with Default Type
function createPair<T = string, U = number>(key: T, value: U): [T, U] {
  return [key, value];
}

console.log(createPair("id", 101)); // Output: ['id', 101]
console.log(createPair<number, boolean>(5, true)); // Output: [5, true]

// 6️ Generic Arrow Function
const getArray = <T>(items: T[]): T[] => {
  return [...items];
};

console.log(getArray<number>([1, 2, 3])); // Output: [1, 2, 3]
console.log(getArray<string>(["A", "B", "C"])); // Output: ["A", "B", "C"]

export {}