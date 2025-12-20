// let a=10;
// const b=20;
// var c=30;
var c=300;
let c=300;

if(true){
    //ab maine jo ye block scope ke andar likha hai wo block scope hai. OR Iske bahar jo likh raha hu wo global scope.
    //Note: Global scope mein jo bhi aap likhenge wo value aap ke liye scope ke andar available hoti hai. Lekin scope ke andar jo value likhte hai wo bahar nhi jani chahiye...
    let a=10;
    const b=20;
    var c=30;
}//this curly braces is the scope

// console.log(a);
// console.log(b);
console.log(c);