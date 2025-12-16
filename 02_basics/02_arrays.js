const marvel_heros = ["Ironman","Spiderman","Thor"];

const dc_heros = ["Superman","flash","Spiderman"];

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);
//marvel_heros.concat(dc_heros);

//const all_heros=marvel_heros.concat(dc_heros);

const all_new_heros =[...marvel_heros, ...dc_heros]
console.log(all_new_heros);//spread operator

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Bibek"));
console.log(Array.from("Bibek"));
console.log(Array.from({name:"Bibek"})
);// interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3));