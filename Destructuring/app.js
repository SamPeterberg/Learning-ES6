// Destructuring ka matlab hai ek object ya array ke elements ko asani se alag variables mein todna, taki unhe alag-alag use kiya ja sake.


// Example 1: Destructuring an object
const person = { name: "John", age: 30, city: "New York" };
const { name, age, city } = person;
console.log(name); // Output: John
console.log(age);  // Output: 30
console.log(city); // Output: New York

// Example 2: Destructuring an array
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(third);  // Output: 3

// Example 3: Default values in destructuring
const { country = "USA" } = person;
console.log(country); // Output: USA

// Example 4: Nested destructuring
const user = { id: 1, profile: { username: "johndoe", email: "john@example.com" } };
const { profile: { username, email } } = user;
console.log(username); // Output: johndoe
console.log(email);    // Output: john@example.com

// Example 5: Destructuring function parameters
function displayUser({ name, age }) {   
    console.log(`Name: ${name}, Age: ${age}`);
}   
displayUser({ name: "Alice", age: 25 }); // Output: Name: Alice, Age: 25

// Example 6: Destructuring with rest operator
const [firstNum, ...restNums] = numbers;
console.log(firstNum); // Output: 1
console.log(restNums); // Output: [2, 3]

// Example 7: Destructuring with renaming
const { name: fullName, age: years } = person;
console.log(fullName); // Output: John
console.log(years);   // Output: 30

// Example 8: Destructuring in function return values
function getCoordinates() {
    return { x: 10, y: 20 };
}
const { x, y } = getCoordinates();
console.log(x); // Output: 10
console.log(y); // Output: 20
