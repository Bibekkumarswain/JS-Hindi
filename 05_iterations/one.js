// For Loop
for(let index=0; index<=10; index++){
    const element=index;
    if(element==5){
        //console.log("5 is best number");
    }
    //console.log(element);
}
//console.log(element);

/*for(let index=0; index<=5; index++){
    console.log(`Outer loop value: ${index}`);
    for(let j=0; j<=5; j++){
        console.log(`Inner loop value ${j} and inner loop ${index}`);
        console.log(index + '*' + j + ' = ' +index*j);
    }
}*/

let myArray=["flash","batman","superman"]
for(let index=0; index<myArray.length; index++){
    const element = myArray[index];
    //console.log(element);
}

// Break & Continue Keyword
for(let i=0;i<=20;i++){
    if(i==5){
        console.log(`Detected 5`);
        continue;
    
    }
    console.log(`value of i is ${index}`)
}