var b = 3000
let a = 300
if(true){ 
    let a = 20
    const c = 40
    // console.log("inner value inside if" , a);
    

}

//  console.log(a);
//  console.log(b);
//  console.log(c);


function one(){
    const username = "YOGI"
    function two(){
        const website = "youtube"
        console.log(username);

        console.log(website);
        
     }

     two()
}
// one()


if (true){
    const username = "LANGRI"
    if(username == "LANGRI"){
        const website = " youtube"
        // console.log(username + website);
        
        
    }
    // console.log(website);
    
}
// console.log(username);


// ++++++++++++++++++++++++++++++++++++++++++ INTRESTING ++++++++++++++++++++++++++++++++++++++++++++++++++++++




 
function  addOne(num){
    return num + 1
}
console.log(addOne(5));




const addTwo = function(num){                       // addtwo is a expression it is similar to variable
    return num + 2                                  // and this can not be accessed befor decleration or initialisation of function because it is a expression 
                                                    // or we can say a variable
}

console.log( addTwo(5) );