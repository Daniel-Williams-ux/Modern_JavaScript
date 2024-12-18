/ Methods of primitives
// A primitive

// * Is a value of a primitive type.
// * There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.


// An object

// Is capable of storing multiple values as properties.
// Can be created with {}, for instance: {name: "John", age: 30}. There are other kinds of objects in JavaScript: functions, for example, are objects.
// One of the best things about objects is that we can store a function as one of its properties.
let Dan = {
    name: "Dan",
    sayHi: function() {
        console.log('Hi buddy!');
    }
};

Dan.sayHi();

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let Dan = {
            name: 'Dan',
            sayHi: function() {
                alert('Hi buddy!')
            }
        };
        Dan.sayHi()
    </script>
</body>
</html>

// So here we’ve made an object john with the method sayHi.
// Many built-in objects already exist, such as those that work with dates, errors, HTML elements, etc. They have different properties and methods.
// But, these features come with a cost!
// Objects are “heavier” than primitives. They require additional resources to support


// **Objects vs. Primitives**
// Primitives (like numbers, strings, and booleans) are basic, lightweight values.
// Objects are more complex and “heavier” because they need extra resources to support features like methods and properties.
// The Challenge
// JavaScript wanted:

// Primitives to stay simple and fast.
// But also let us use methods (like .toUpperCase() for strings).
// The Solution: Temporary "Object Wrappers"
// When you try to use a method on a primitive:

// JavaScript temporarily creates a special object for the primitive (e.g., a String object for a string).
// This object has methods and properties (like .toUpperCase()).
// The method runs, and the temporary object disappears.
// Example
let str = "Hello";

console.log(str.toUpperCase()); // Outputs: "HELLO"
// What happens:

// "Hello" is a primitive string.
// When .toUpperCase() is called, JavaScript creates a temporary String object for "Hello".
// The toUpperCase() method runs, returns "HELLO", and the temporary object is destroyed.
// Key Idea
// This way, primitives stay lightweight, but you can still use methods when needed!


// Here’s a super simple explanation:

// **Primitives vs. Objects**
// Primitives are basic stuff like numbers and words (strings). They’re small and simple.
// Objects are like toolboxes—they’re bigger and can do more things.
// The Problem
// JavaScript wanted you to:

// Keep primitives small and fast.
// Still let you use cool tricks (like making a word all uppercase).
// The Clever Solution
// When you use a trick (like .toUpperCase()):

// JavaScript quickly builds a toolbox (a special object) around your word or number.
// The toolbox has tools (like .toUpperCase()).
// The tool does its job, then the toolbox disappears.
// Example

let word = "hello";

console.log(word.toUpperCase()); // "HELLO"
// What happens:

// "hello" is just a simple word.
// When you call .toUpperCase(), JavaScript makes a temporary toolbox for "hello".
// The toolbox makes "hello" uppercase, gives you "HELLO", and then goes away.
// Key Idea
//JavaScript is smart—it makes a toolbox when you need it, but keeps things simple the rest of the time!


//The “object wrappers” are different for each primitive type and are called: String, Number, Boolean, Symbol and BigInt. Thus, they provide different sets of methods.


// **JavaScript Is Super Smart**
// When you use a method (like .toFixed() on a number), JavaScript:

// Pretends to quickly make a toolbox (an object) so you can use the method.
// But because JavaScript is so smart, it may not actually make the toolbox—it just acts like it did to save time.
// This keeps everything fast but still works the way it’s supposed to.

//Example:
.toFixed()
//Let’s say you have a number:

let n = 1.23456;
console.log(n.toFixed(2)); // Outputs: "1.23"
//What happens:

// n is just a number.
// When you call .toFixed(2), JavaScript behaves like it made a temporary toolbox (a Number object) for n.
// The .toFixed(2) tool rounds n to 2 decimal places and gives you "1.23".
// The toolbox disappears after the job is done.

