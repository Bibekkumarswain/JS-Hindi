// let a=10;
// const b=20;
// var c=30;
var c=300;
let a=300;

if(true){
    //ab maine jo bhi ye block scope ke andar likha hai wo block scope hai. OR Iske bahar jo likh raha hu wo global scope.
    //Note: Global scope mein jo bhi aap likhenge wo value aap ke liye scope ke andar available hoti hai. Lekin scope ke andar jo value likhte hai wo bahar nhi jani chahiye...
    let a=10;
    const b=20;
    var c=30;
    console.log("INNER: ", a);
}//this curly braces is the scope

/*for(let i=0; i<Array.length; i++){
    const element =array[i];
}*/

// console.log(a);
// console.log(b);
//console.log(c);

function one(){
    const username="Bibek"

    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    two();
}
//one()


if(true){
    const username="Bibek"
    if(username=="Bibek"){
        const website=" youtube"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


//========== interesting ==========//
console.log(addOne(5));
function addOne(num){
    return num + 1
}
addOne(5)


addTwo(5);
const addTwo = function(num){
    return num + 2
}
//addTwo(5);