function sayMyName(){console.log("B");
console.log("I");
console.log("B");
console.log("E");
console.log("K");}

//sayMyName()

function addTwoNumbers(number1, number2)//parameter
{
    //console.log(number1 + number2);
    //let result = number1 + number2
    //return result
    return  number1 + number2
}

addTwoNumbers(4,5);//Argument
//addTwoNumbers(3,"4");
//addTwoNumbers(3,"a");
//addTwoNumbers(3,null);

const result = addTwoNumbers(3,5)

//console.log("Result: ", result);

/*function loginUserMessage(userName){
    return `${userName} just logged in`
}
//loginUserMessage("Bibek");
console.log(loginUserMessage("Bibek"));*/

function loginUserMessage(userName = "Someone"){
    if(!userName){
        console.log("Please enter a username");
        return
    }
    return `${userName} just logged in`
}
console.log(loginUserMessage("Bibek"));

//function calculateCartPrice(num1){
function calculateCartPrice(val1, val2, ...num1){
    
    return num1
}
console.log(calculateCartPrice(200,300,400,2000))

const user={
    username:"Bibek",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username:"Sam",
    price:399
})

const myNewArray=[200,400,100,500]

function returnSecondValue(getArray){
    return getArray[1] 
  }
console.log(returnSecondValue(myNewArray));