const myArr = [0,1,2,3,4,]
const myHeros = ["ironMan", "hulk","spiderMan",'captainAmerica']
const myArr2 = [1,2,3,4,5]
// console.log(myArr[2]);
// console.log(myHeros[3]);

///////// Array Method ///////////
// myArr.push('Yogi')
myArr.push('Kartik')
myArr.pop()
myArr.unshift('one')//most unused because it adds the value in the start of the array so
//  that we have to change all the element index of the array
myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(5));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()//. converts array into string form


// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice and splice

console.log("A ",myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);







