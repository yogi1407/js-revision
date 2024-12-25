const accId = 123456
let accountEmail = "yogi@google.com"
var accountPass = "1234".  // least used and must not be used
accountCity = "jaipur"
let accountState = null;
console.log(accId)

//  prefer not to use var because of the issue in the block scope and functional scope
console.table([accId, accountEmail, accountPass, accountCity, accountState])