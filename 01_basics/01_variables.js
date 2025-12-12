const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword="12345"
accountCity ="Jaipur"//Js mein kahi baar aap ko variable kuch na likhe bina aap ek variable ke liye memory reserve kar sakte ho.
let accountState;
//accountId=2 //not allowed
accountEmail = "hc@hc.com"
accountPassword="21212121"
accountCity="Hyderabad"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
