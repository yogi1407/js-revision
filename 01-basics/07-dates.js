let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2022, 11, 21, 9, 12)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-05-2023")
// console.log(myCreatedDate.toString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.toString());
console.log(newDate.getMonth());
console.log(newDate.getTime());

newDate.toLocaleString('default',{
    weekday:"long"
})



