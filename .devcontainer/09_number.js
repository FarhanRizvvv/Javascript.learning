const score =400;
console.log(score);

const balance = new Number(300.239);
console.log(balance);
console.log(balance.toString());//convert number in to string
console.log(balance.toString().length);
console.log(balance.toFixed(2)); //used to roundoff the fractional value
console.log(balance.toPrecision(4)); //precised the value from right side.

const hundreds= 100000;
console.log(hundreds.toLocaleString()); // make number in commas as US type
console.log(hundreds.toLocaleString('en-IN')); // in indain format



//#################Maths############




console.log(Math);  // object in Js
console.log(Math.abs(-4)); //mod in math library
console.log(Math.round(4.5)); //roundoff the value
console.log(Math.ceil(4.1)); //get the upcoming number
console.log(Math.floor(4.9)); //get the same decimal value
console.log(Math.min(4,3,6,8));
console.log(Math.max(3,4,5,2));

//mostly used
console.log(Math.random()); //op value will be 0<=value<=1;
console.log((Math.random()*10)+1); // value will be 1<=value<=10;
console.log(Math.floor(Math.random()*10)+1); //value will be in single digit.

const min =10;
const max=20;

console.log(Math.floor(Math.random() * (max - min + 1 ))+ min )





