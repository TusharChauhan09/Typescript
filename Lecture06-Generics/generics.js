"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1️ Why Generics? (A function that works with multiple types)
function identity(value) {
    return value;
}
console.log(identity(42)); // Output: 42
// OR   
console.log(identity("Hello")); // Output: Hello
// 2️ Generic Function (Reusable with any type)
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var mergedObj = merge({ name: "Alice" }, { age: 25 });
console.log(mergedObj); // Output: { name: 'Alice', age: 25 }
// 3️ Generic Class
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data = this.data.filter(function (i) { return i !== item; });
    };
    DataStorage.prototype.getItems = function () {
        return this.data;
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem("Apple");
textStorage.addItem("Banana");
textStorage.removeItem("Apple");
console.log(textStorage.getItems()); // Output: ["Banana"]
var numberStorage = new DataStorage();
numberStorage.addItem(10);
numberStorage.addItem(20);
console.log(numberStorage.getItems()); // Output: [10, 20]
function logLength(item) {
    console.log("Length: ".concat(item.length));
}
logLength("Hello"); // ✅ Works, because string has length
logLength([1, 2, 3]); // ✅ Works, because arrays have length
// logLength(100); // ❌ Error: Number does not have length
// 5️ Generic Function with Default Type
function createPair(key, value) {
    return [key, value];
}
console.log(createPair("id", 101)); // Output: ['id', 101]
console.log(createPair(5, true)); // Output: [5, true]
// 6️ Generic Arrow Function
var getArray = function (items) {
    return __spreadArray([], items, true);
};
console.log(getArray([1, 2, 3])); // Output: [1, 2, 3]
console.log(getArray(["A", "B", "C"])); // Output: ["A", "B", "C"]
