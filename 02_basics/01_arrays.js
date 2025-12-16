// array
//In JS,jab bhi aap array ke andar copy operation karenge,toh ye shallow copy banata hai.
const myArr = [0,1,2,3,4,5]
const myHeros=["john Cena" , "Roman"]

const myArr2=new Array(1,2,3,4)
console.log(myArr[3]);

//Array Methods
//myArr.push(6);
//myArr.push(7);
//myArr.pop(7);

//myArr.unshift(9);
//myArr.shift();

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));

//const newArr = myArr.join()

//console.log(myArr);
//console.log(newArr);
//console.log(typeof newArr);

// Slice, Splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1)
console.log("B",myArr)

const myn2 = myArr.slice(1,3)
console.log(myn2);