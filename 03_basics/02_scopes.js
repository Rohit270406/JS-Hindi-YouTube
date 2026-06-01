let a=10;
const b=20;
var c=30;
if(true){
    let a=10;
    const b=20;
    console.log("INNER: ",a);

}

console.log(a)

function one(){
    const username="rohit"
    function two(){
        const website="youtube"
        console.log(username);
    }
    if(true){
        const username="rohit"
        if(username==="rohit"){
            const website="youtube"
        }
    }
   //
   // console.log(website);
    two()
}
one()
//+++++++++++++++++++++++++++++++++intersting+++++++++
function addone(num){
    return num+1;
}
console.log(addone(5))
 const addTwo=function(num){
    return  num+2;
 }
 addTwo(5)