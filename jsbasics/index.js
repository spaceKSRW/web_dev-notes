// console.log("hello world vev again");
// let a;
// console.log(a);
// //arrays
// let names =['gurvinder','karan','aditiya','abhijeet'];
// console.log(names[1]);

//operators post and pre

// let b;
// b=100+123;
// console.log(b++);
// console.log(b);

// let c=100;
// let d=100;
// let e=(c++) + (d++)
// console.log(e);
// console.log(e===c);
//loose equality (==) , value should be same

let a = 1;
let b = "1";
let c = 1;
console.log(a == b);

//strict equality , (===) , value and data should be same
10;

console.log(a === b); // false dega
console.log(a === c); // true dega

//ternary operator condition ? val at true : val at false ;

// let age=prompt('enter age');
let age = 19;
let status =
  age >= 18
    ? console.log("you have universal franchise rights")
    : console.log("you are underage");

// logical operator || , && , !

//concept of false and truth  ; falsy = false , undefined , null , NaN , 0 , ' ' ; truthy = anything that is not falsy

// short circuit means , agar ek vaar truth value mil gayi toh aage ki expression check nahi hogi

// bitwise and or => & and , | or

// control statements
let marks = 90;
// 1) if-else-if
if (marks > 90) {
  console.log("grade A");
} else if (marks > 50) {
  console.log("grade B");
} else {
  console.log("grade C");
}

//switch case
let num = 1;
switch (num) {
  case 1:
    console.log("hello roll 1");
    break;

  case 2:
    console.log("hello roll 2 ");
    break;

  default:
    console.log("tu kon?");
    break;
}


// for loops

// for(let i=0 ; i<10 ; i++){
//     console.log(i);
// }

// while loops
// let i=10;
// while(i--){
//     console.log(i);
    
// }

// do while loops
// let i=-1
// do{
// console.log(i);
// i--;
// }
// while(i>0);

//for-in loop used for iteration on objects

let rectangle={
  length:2,
  breadth:4
};
for(let key in rectangle){
  console.log(key,rectangle[key]);
} 

// for-of loop (available only for iterables , i.e arrays , maps)

for(let key of Object.entries(rectangle)){
  console.log(key);
}