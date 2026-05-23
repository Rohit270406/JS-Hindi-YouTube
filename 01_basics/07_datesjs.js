let myDate= new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate);
let myCreateDate=new Date(2006,3,27,5,3)
console.log(myCreateDate.toLocaleString());
let myCreateDate1=new Date("04-27-2006")
console.log(myCreateDate1.toLocaleString());
let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreateDate1.getTime());
console.log(Math.floor(Date.now()/1000));
let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
//`${newDate.getDay()} and the time `
newDate.toLocaleString('default',{
    weekday:"long",
    
})