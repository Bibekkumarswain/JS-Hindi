//Singleton
// Object.create // We can create Object by using this create, this is known as constructor method.

const mySym = Symbol("key1");
// object literals
const JsUser={
    name:"Bibek",
    "full name":"Bibek kumar swain",
    [mySym]: "mykey1",
    age: 22,
    location: "Bengaluru",
    email:"bibek@123",
    isLoggedIn: false,
    lastLoginDays:["Monday","Thursday"]
}// this is the way to declare an object.

// How to access objects
console.log(JsUser.email);//this is not the good way to access an object.
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email="Bibek@123gmail.com"
//Object.freeze(JsUser)
JsUser.email="Bibek@kumar123gmail.com"
console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS user");
}
//console.log(JsUser.greeting);

JsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());