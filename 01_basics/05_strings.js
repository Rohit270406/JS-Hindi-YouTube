const  name="Rohit"
const repoCount=50
console.log(name +repoCount+" Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
const gameName=new String('rohitttt')//best syntax
console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('h'));

const newString=gameName.substring(0,4)
console.log(newString);
const anotherString =gameName.slice(-8,4)
console.log(anotherString)
const newStringOne="   rohit  "
console.log(newStringOne);
console.log(newStringOne.trim());
//javascript MDN for reading
const url="https://rohit.com/rohit%20roy"
console.log(url.replace('%20','-'))
console.log(url.includes('rohit'))
console.log(url.includes('kau'))
const gameName1='rohit-good-boy'
console.log(gameName1.split('-'));