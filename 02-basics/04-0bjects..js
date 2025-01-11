// const tinderUser = new Object()


const tinderuser = {}

tinderuser.id = "123"
tinderuser.name = "Jaydev"
tinderuser.isloggedin = false

// console.log(tinderuser);


const regularUser = {
    email :  "user@gmail.com",
    fullName:{ 
        userFullname:{
            firstName: "kartik",
            lastName: "Garg",

        }
    }
}
// console.log(regularUser.fullName.userFullname.lastName);


const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "d"}
const obj4 = {5 : "e" , 6 : "f"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign(obj1 , obj2 , obj4)

const obj3 = { ...obj1 , ...obj2 , ...obj4 }
console.log(obj3);

const users = [
    {
        id :  "234",
        email: "y@gmail.com"

    }  ,
    
    {
        id :  "234",
        email: "y@gmail.com"

    } 
    ,
    {
        id :  "234",
        email: "y@gmail.com"

    }
]

console.log(users[1].email);


console.log(users);
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('jaydev'));
