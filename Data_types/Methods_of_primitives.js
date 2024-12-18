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
