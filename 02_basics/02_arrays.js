const marvel_heroes= ["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]
//marvel_heroes.push(dc)
//console.log(marvel_heroes);
//console.log(marvel_heroes[3][1]);
const allheroes=marvel_heroes.concat(dc)
//console.log(allheroes);
const all_new_heroes=[...marvel_heroes,...dc]
console.log(all_new_heroes)
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_array=another_array.flat(Infinity)
console.log(real_array)
console.log(Array.isArray("Rohit"))
console.log(Array.from("Rohit"))
let sc1=100;
let sc2=200;
let sc3=300;
console.log(Array.of(sc1,sc2,sc3));