const name = "yogi "
let repoCount = 10

// console.log(name + repoCount + " value");

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('yogi-yk')

// console.log(gameName[2]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('i'))


const newString = gameName.substring(0 , 5)
const anotherString = gameName.slice(-7 , 3)

// console.log(newString);
// console.log(anotherString);


const newStringone = "     yogi.   "
// console.log(newStringone);
// console.log(newStringone.trim());

const url = "https://www.linkedin.com/in/yogendra%20katara%20822a68192/"
// console.log(url.replaceAll('%20' , '-'));

console.log(url.includes('%25'));
console.log(gameName.split('-'));

