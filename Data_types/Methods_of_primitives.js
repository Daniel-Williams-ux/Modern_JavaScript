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







                                                                              //Tasks
// Can I add a string property?
// Consider the following code:

let str = "Hello";

str.test = 5;

alert(str.test);
//What do you think, will it work? What will be shown?

                                                                            // solution
// Try running it:

let str = "Hello";

str.test = 5; // (*)

alert(str.test);
//Depending on whether you have use strict or not, the result may be:

// undefined (no strict mode)
// An error (strict mode).
// Why? Let’s replay what’s happening at line (*):


                                                                      //What Actually Happens
// When you try to add test to str, JavaScript creates a temporary toolbox (a wrapper object) for the string "Hello".
// If you’re in strict mode, JavaScript doesn’t allow you to add properties to this temporary toolbox and throws an error.
// If you’re not in strict mode, JavaScript tries to add the property to the toolbox. But the toolbox disappears immediately after, so the property is lost.
// Results
// Depending on the mode:

// In strict mode: You get an error because primitives can’t have permanent properties.
// Without strict mode: alert(str.test) shows undefined because the toolbox is gone.
// Why Can’t Primitives Store Data?
// This happens because primitives are not objects:

// They’re just simple values like numbers or strings.
// While a temporary toolbox (object) can be created to use methods, it’s destroyed right away.
// That means you can’t add or store new properties in a primitive.
// Key Idea
// Primitives (like strings) are not objects, so:

// You can’t add custom properties to them.
// If you try, it might look like it worked, but the property will disappear!

// How Primitives Work with Random Properties vs. Built-In Properties/Methods
// 1. Primitives Are Not Objects
// Primitives (like strings, numbers, booleans) are simple values, not objects. However:

// JavaScript allows you to use methods on primitives as if they were objects.
// This is done by creating a temporary wrapper object behind the scenes.
// 2. Built-In Properties/Methods
// Primitives have built-in properties and methods provided by their temporary wrapper objects. For example:

// String Primitive Built-In Methods:
// "hello".toUpperCase() creates a temporary String object and calls its .toUpperCase() method to return "HELLO".
// "hello".length creates a temporary object to access the length property, which returns 5.
// Example:

let str = "Hello";

console.log(str.toUpperCase()); // "HELLO"
console.log(str.length); // 5
// How It Works:

// JavaScript creates a temporary String object for "Hello".
// The .toUpperCase() method or .length property is accessed.
// The temporary object disappears after the operation.
// 3. Random Properties
// If you try to add a random property (like .test) to a primitive, JavaScript behaves differently:

// What Happens:

// A temporary wrapper object is created when you access the primitive.
// The random property (like str.test) is added to the temporary object, not the primitive itself.
// The temporary object is immediately destroyed after use, so the property vanishes.
// Example:

let str = "Hello";

str.test = 5; // Adding a random property to the temporary object
console.log(str.test); // undefined

// Explanation:

// JavaScript creates a temporary String object for "Hello" when str.test is accessed.
// The property test = 5 is added to the temporary object.
// The temporary object is destroyed, so str itself never actually stores test.
    
//  *Key Differences*
// Feature      	              Built-In Properties/Methods	                        Random Properties
// What It Is	                Predefined by JavaScript (e.g., .length)	        User-defined, made up by the developer
// Where It Lives	            Inside the temporary wrapper object	                Temporarily added to the wrapper object
// Persistence	                Always available	                                Disappears immediately
// Example	                    "abc".length → 3	                                str.test = 5; → undefined

//     *Special Notes on Primitives*
// Primitives Are Immutable: You cannot change or add properties to them directly. Temporary wrapper objects don’t modify the original value.
// Error in Strict Mode: In strict mode, trying to set random properties (like str.test = 5) will throw an error because primitives don’t actually support adding properties.
// Example with Strict Mode:

"use strict";

let str = "Hello";
str.test = 5; // Throws an error

// Summary
// Built-In Properties/Methods work because JavaScript uses temporary wrapper objects for primitives.
// Random Properties don’t work because these wrapper objects are temporary and disappear immediately.
// Primitives are lightweight and immutable, so they only allow access to predefined methods and properties, not custom ones.
