/*//concatination of strings

let name= "Farhan";
let weight= 50;

// console.log(name +"'s " + weight + "kg")
// old to use 

console.log(`Hello my name is ${name} and my weight is ${weight} THANKYOU`);
*/

let GameName = new String(" Farhanppp ");
console.log(GameName);

// Methods of string

console.log(GameName[0]); //to find the attached key value
console.log(GameName.__proto__); // to find the prototype of string
console.log(GameName.length); // read the length of string
console.log(GameName.toUpperCase()); // uppercase
console.log(GameName.toLowerCase()); //lowercase
console.log(GameName.charAt(2)); //find the charater at given position
console.log(GameName.indexOf('t')); // find the positoin of given character
console.log(GameName.substring(0,4)); //cut the string from given starting index to to ending-1;
console.log(GameName.slice(-6,2)); // cut the string but can have the negative index also




console.log(GameName.trim()); //trim the whites spaces of both end
console.log(GameName.trimStart());//trim the white sapces of starting end
console.log(GameName.trimEnd());// trim the whites spaces of endind end

let url ="https://farhan.com//farhan%20rizvi"
console.log(url.replace('%20','-'));//replace %20 by '-' 
console.log(url.includes('farhan'));// used to find whether the given substring is present or not in string

console.log(GameName.split(''));  //sperates the given string on the basis of given seperator