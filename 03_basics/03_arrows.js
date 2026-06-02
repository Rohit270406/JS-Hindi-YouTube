const user={
username: "rohit",
price: 999,
 welcomeMessage: function(){
console.log(`${this.username},welcome to website`);
//console.log(this)
 }


}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

const chai = () =>{
    let username="rohit"
    console.log(this);
}
chai()
const addTwo=(num1,num2)=>({username:"rohit"})
console.log(addTwo(3,4))

