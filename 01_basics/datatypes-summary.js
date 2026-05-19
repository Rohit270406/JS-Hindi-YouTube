//primitive
//7 types: String,Number,Boolean,null,undefined,symbol,BigInt
const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)
const bigNumber=3464747353n
//Reference (Non primitive)
//Array,Objects,Functions

const heroes=["shaktimam","naagraj","doga"]
let myObj={
    name: "Rohit",
    age:20
}
const myFunction=function()
{
    console.log("Hello World")
}
console.log(typeof myFunction);