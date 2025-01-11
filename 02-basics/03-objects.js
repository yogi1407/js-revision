// singleton : is is one of it's own kind object when made by cinstructor

//object literals.  the objects made by object literals is not singleton
// Object.create


const mySymbol  =  Symbol ("key1")
const jsUser = {
    name: "Yogi",
    "full name": "Yogi K",
    [mySymbol] : "mykey1",
    location: "mathrua",
    Email: "Yogi@github.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday", "saturday"]

}

// console.log(jsUser.Email);
// console.log(jsUser["Email"]);
// console.log(jsUser.location);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]);
// console.log(typeof jsUser[mySymbol]);
// Object.freeze(jsUser)

jsUser.Email = "yoyo@yogi.com"
// console.log(jsUser.Email);

// console.log(jsUser
// );

jsUser.greetings = function(){
    console.log("hello js user");
}

jsUser.greetingsTwo = function(){
    console.log(`hello js user ,  ${this.lastLoggedIn}`);
    
}
console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());



