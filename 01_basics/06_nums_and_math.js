const score = 350
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber=23.9845

console.log(otherNumber.toPrecision(3));

const hundreds=100
console.log(hundreds.toLocaleString('en-IN'));

// ========== MATH ==========
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4,6));
// console.log(Math.ceil(4,2));
// console.log(Math.floor(4,9));
// console.log(Math.min(4,3,9,6,5));
// console.log(Math.max(4,3,8,6));

console.log(Math.random());//this math.random() always gives the value between 0 and 1(ie. 0.1, 0.2, 0.4).
//2:50:50/9:02:20
console.lo((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max-min+1))+min)