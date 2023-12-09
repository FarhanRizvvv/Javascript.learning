/* Datatype is classified on basis on how to store data and how to access it.
 Generally Datatype is divided into two types
 Primitive and Non-Primitive (Reference type)

 Primitve dataypes are call by value that means they call as copy of value not a reference
 
 7 primitive:- String, Number, Boolean ,Null, Undefined , Symbol, BigInt;
ex:-
 */

 let text ="Awws12"; 
 //or "12sdfdw"
 let sum = 123;
 let isLoggedIn = true;
 let outsideTemp = null;
 let accountCity = undefined; // let accountCity;
 let unique= Symbol('123');  // its wraap value in unique symbol
 //even the two same symbol of same value are not same

 let bigNumber = 12334455677n;

console.log(typeof text);
console.log(typeof sum);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp); // Return type of null is Object 
console.log(typeof accountCity);
console.log(typeof unique);
console.log(typeof bigNumber);

/*Non-primitive are also called as Reference type bcoz they are call by refenece 

array, objects, functions */

let heros= ["Ranbir","Booby","Anil"];

let myObj= {
    name:"Farhan",
    age:19,
    sex:"male"
}

let myFunction = function(){
    console.log("Hello Duniya");
}

 console.log(heros);
 console.log(myObj);
 console.log(myFunction);

 console.log(typeof heros);
 console.log(typeof myObj);
 console.log(typeof myFunction);
//Return type of array & objects is OBJECT and function is function(object function )



///////////////////
//Type of Memory
//Stack (Primitive) and Heap (Non-Primitive)
// In stack memory we get the copy of variable   and
// in heap memory we get reference of orginal value

// Call by value means if we declare to variable like

let myYoutubeName ="farhan.com" ;
let anotherName = myYoutubeName;
anotherName ="Shahran.com";

console.log(myYoutubeName)
console.log(anotherName);
 //in op thevalue of myYoutubeName is not change at all bcoz it is on primitive type and store in stack memory


 //Heap memory example

 let user1={
    email : "sdad1222@.com",
    age: 18,
 }
 let user2=user1;

 user2.email = "ddddd@gamil.com";

 console.log(user1);
 console.log(user2);

 //both user will have same value which is modified earliest which is known as call by reference that means the reference is get modify if if changing happened
 


