const User = {    
    firstName: "Yash",
    lastName: "Khati",
    "full name": "Yash Khati",
    "age" : 23,
    location : "Dehradun",
    email : "yashkhati23@gmail.com",
    isLoggedIn : false,
}


// ----------------------- Accessing Objects using dot notation------------------------------

console.log(User.firstName)
console.log(User.isLoggedIn)
console.log(User.age)

// console.log(User."full name") ->error



// ----------------------- Accessing Objects using Square -----------------------------------

console.log(User["firstName"])
console.log(User["isLoggedIn"])
console.log(User["age"])
console.log(User["full name"])


//------------------------Creating Additional Properties of Object----------------------------

const newObject = {
}
newObject.name = "Yash Khati"
newObject.age = 22
newObject["email"] = "yashkhati23@gmail.com"
newObject["isLoggedIn"] = false


console.log(newObject)

// address = prompt("Enter Address ")
// // newObject.address 
// newObject[address] 

// console.log(newObject)

