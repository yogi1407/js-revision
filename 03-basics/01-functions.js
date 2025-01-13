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
