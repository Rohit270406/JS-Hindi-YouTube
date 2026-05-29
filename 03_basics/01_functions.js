function sayMyName(){
console.log("R");
console.log("o");
console.log("h");
console.log("i");
console.log("t");
}
sayMyName()

function addTwoNumbers(number1,number2){
    console.log(number1+number2)
}
addTwoNumbers(3,4)
function addTwoNumbers(number1,number2){
    let result=number1+number2
    
    return result;
}
const result=addTwoNumbers(3,5)
console.log("Result:",result);
function loginUserMessage(username="robi"){
    if(username===undefined){//if(!username) also
        console.log("Please enter a  username");
        return;
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Rohit"))
console.log(loginUserMessage())
