const userEmail="bibek@.ai"
//const userEmail=""
//const userEmail=" "
//const userEmail=[]
if(userEmail){
    console.log("got user email");
} else{
    console.log("Don't have user email");
}

/* Falsy Values
false, 0, -0, BigInt 0n, "", null, undefined, NaN */

/* Truthy Values 
" ", "0",'false', "false", [], {}, function(){} */

/* if(userEmail.length!=0){
    console.log("Array is empty");
}*/

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");//Like this we can also detect & check the array is empty or not.
}
