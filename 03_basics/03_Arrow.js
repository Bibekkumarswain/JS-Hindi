const user = {
    username:"Bibek",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
    
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

//console.log(this);//output is empty curly braces{}.

/*function chai(){
    let username="Bibek"
    console.log(this.username);
}
chai();*/

/*const chai=function(){
    let username="Bibek"
    console.log(this.username);
}
chai();*/

/*const chai = ()=>{
    let username = "Bibek"
    console.log(this);
    console.log(this.username);
}
chai();*/

/*const addTwo=(num1, num2)=>{
    return num1+num2// (Explicit return) - when we are using return keyword.
} */

//const addTwo = (num1, num2) => num1 + num2
//const addTwo = (num1, num2) => (num1 + num2)//Implicit return

const addTwo = (num1, num2) => ({username:"Bibek"})

console.log(addTwo(3,5))

const myArray = [2,5,3,7,8]
myArray.forEach();