//singleton 
//object literals

//Object.create
const mySym=Symbol("key1")
const JsUser={name:"ROHIT",
    "full name":"ROHIT ROY",
    [mySym]:"mykey1",
    age:20,
    location:"BENGALURU",
    email: "rohit27@gmail.com",
    lastLoginDay:["MONDAY","THURSDAY"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
JsUser.email="rohit23@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email="robi@goggle.com"
console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo=function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


