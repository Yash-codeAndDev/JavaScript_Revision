# Objects

- An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

### Object Creation

- Object can be created using one of 2 syntaxes :
  1. Constructor Syntax
  2. Literal Syntax

    ```javascript
    // Constructor Syntax
    const user1 = new Object();

    // Object literal Syntax
    const user2 = {};
    ```

- Literals :  We can immediately put some properties into {...} as “key: value” pairs
    ```javascript
            const user = {     // an object
            name: "John", // by key "name" store value "John"
            age: 30 // by key "age" store value 30
            };
    ```  

### Accessing Object Properties 
*  We can access the property of object using dot notion or using square bracket notion
* We cannot access multiword property using dot notion instead square bracket are allowed to access using square bracket.

    ```javascript
        const User = {    
            firstName: "Yash",
            lastName: "Khati",
            "full name": "Yash Khati",
            "age" : 23,
            location : "Dehradun",
            email : "yashkhati23@gmail.com",
            isLoggedIn : false,
        }

        console.log(User.firstName)
        console.log(User.isLoggedIn)
        console.log(User.age)
        // console.log(User."full name") -> error because dot notation cannot access multiword property
        
        console.log(User["firstName"])
        console.log(User["isLoggedIn"])
        console.log(User["age"])
        console.log(User["full name"])

    ```


### Creating Additional Properties of Object

* We can add properties to an object after its creation

    ```javascript
        const newObject = {
        }
        newObject.name = "Yash Khati"
        newObject.age = 22
        newObject["email"] = "yashkhati23@gmail.com"
        newObject["isLoggedIn"] = false
        
        console.log(newObject)
        <!-- Output
                     {
            name: 'Yash Khati',
            age: 22,
            email: 'yashkhati23@gmail.com',
            isLoggedIn: false
        } -->
    ```


* We cannot add properties to an Object dynamically using dot notation, however we can add properties dynamically using bracket notation

    ```