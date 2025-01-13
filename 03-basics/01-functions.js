function SayMyName(){
    console.log("y");
    console.log("o");
    console.log("g");
    console.log("i");
}
// SayMyName()

// function addTwoNum(number1,number2){

//     console.log( number1 + number2);
    
//  }
 function addTwoNum(number1,number2){

//   let result = number1+number2
//    return result
return number1+number2
    
 }
const result = addTwoNum(5,6)
// console.log("result :" , result);

function userLoggedIn(username = "no one"){
    if(username == undefined){                // you can also write this like (!username ) this is also equivelant

        console.log("please enter a valid username input");
        return;
        
    }
   
    return  `${username} just loggedIn few seconds ago`
    
}
// console.log(userLoggedIn());

// function CalculateCartPrice(...num1){          
//     //.      " ... " this is rest operator
//  return num1
// }
// console.log(CalculateCartPrice(400 ,4, 900));
function CalculateCartPrice(val1 , val2 , ...num1){          
    //.      " ... " this is rest operator
 return num1 
}
// console.log(CalculateCartPrice(400 ,420, 900 , 2000));





// passing object to function 
const user = {
    username: "yogi",
    price: "1090"
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price} `);
    
}
// handleObject(user)
handleObject({
    username : "sammy",
    price : "3999"
})
// passing array to function

const myNewArr = [400 , 300 , 200 , 100]

function returnSecondValue(getArr){
    return getArr[3]
}

console.log(returnSecondValue([200 , 800 , 700 , 300]));









