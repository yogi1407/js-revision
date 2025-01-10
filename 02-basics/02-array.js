const MarvelHeros = ["ironman" , "spiderman" , "hulk" ]
const DcHeros = ["batman" , "superman" , "flash"]

// MarvelHeros.push(DcHeros)
// console.log(MarvelHeros);

const allNewHeros = MarvelHeros.concat(DcHeros)
// console.log(allNewHeros);

const allHeros = [...DcHeros , ...MarvelHeros] //... is spread operator
// console.log(allHeros);


const cpmplexArr = [1,2,3 , [4,5,6] ,9,6 , [2,3,5,7,1 , [1,2,3,67,886,32 , [1,345,6,7,7,4]],10 ,24]]
const useableArr =  cpmplexArr.flat(Infinity)
console.log(useableArr);

console.log(Array.isArray("yogi"));
console.log(Array.from("yogi"));
console.log(Array.from({name : "yogi"}));

