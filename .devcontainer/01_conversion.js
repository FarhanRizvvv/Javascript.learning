//converting one datatype into other
// and checking its value

let score= "33"
 //typeof is uesd to check the type of variable 
 // bcoz when the value is get from frontend then we might not have idea about types
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score) //used to convert any datatype in Number
let valueInString = String(score) //used to convert in String

console.log(typeof valueInNumber)
console.log(typeof valueInString)

//but if given string is not totally a number then converting it can change the value of that string 
//example is

let string1="22aa"
console.log(string1)
valString= Number(string1)
console.log(typeof valString)
console.log(valString)
//here o/p is NaN means not a number (check before converting)
//if given value is null then o/p is 0
//if given value is undefined then o/p is NaN
//if given value is boolean then o/p is 0 or 1 ,0->False & 1->True
//if given value is pure string then o/p is NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log( booleanIsLoggedIn)
// 1=> true , 0=> false 
// "farhan"=> true , ""=> false

let someNumber = 22
let stringNumber = String(someNumber)

//12=> 12(string)

