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