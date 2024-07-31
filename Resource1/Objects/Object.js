const User = {    
    firstName: "Yash",
    lastName: "Khati",
    "full name": "Yash Khati",
    "age" : 23,
    location : "Dehradun",
    email : "yashkhati23@gmail.com",
    isLoggedIn : false,
}


// ----------------------- Accessing Objects using dot notation---------------------------

console.log(User.firstName)
console.log(User.isLoggedIn)
console.log(User.age)

// console.log(User."full name") ->error



// ----------------------- Accessing Objects using Square ---------------------------

console.log(User["firstName"])
console.log(User["isLoggedIn"])
console.log(User["age"])
console.log(User["full name"])



