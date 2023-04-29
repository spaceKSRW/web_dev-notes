//factory function
// function createRectangle(len,bre){
//     return rectangle={
//         length:len,
//         breadth:bre,
//         draw(){
//             console.log('drawing rectangle');
//         }
//     };
// }

// let rectangle=createRectangle(5,4);
// console.log(rectangle.breadth);

// constructor function

// function Rectangle(len,bre) {
//   this.length = len;
//   this.breadth = bre;
//   this.draw = function () {
//     console.log("drawing");
//   };
// }
// //objecct creation

// let obj=new Rectangle(2,3);
// //dynamic nature
// obj.gender='sigma male';
// // deleting the feature
// delete obj.gender;

// reference passing object ke case m

// a={
//     value:10
// };
// a.value++;
// let b=a;
// console.log(a.value);
// console.log(b.value);

//pass by value

// let a=100;
// function increase(a){
//     a++;
// }
// increase(a);
// console.log(a);

// pass by reference using same above example
// a={
//     value:100
// }
// function inc(a){
//     a.value++;
// }

// inc(a);
// console.log(a.value);

//hoisting : shifts function decleration
run();

function run() {
  console.log("hello world");
}

// named function assignment

let assign = function walk() {
  console.log("walking");
};
assign();

//anonymous function assignmnt

let assign2 = function () {
  console.log("walking anonymously");
};
assign2();

//parameterized function

function sum(a, b) {
  return a / b;
}
console.log(sum(12, 0));

//arguments--special objects

function sum2(a, b) {
  console.log(arguments);
  return a + b;
}

let ans = sum2(1, 2, 3, 4, 5, 6, 7);
console.log(ans);

//putting multiple answers
function sum3() {
  let total = 0;
  for (let value of arguments) {
    total = total + value;
  }
  return total;
}
let a = sum3(1, 2, 3, 4, 5, 6, 7, 8, 81);
console.log(a);

//rest operator = ...
function sums(num1, num2, ...args) {
  //first value is assigned to num1 and second value assigned to num2
  console.log(args);
  console.log(num1);
  console.log(num2);
}
sums(1, 2, 3, 4, 5, 6, 7, 8, "karan");

//default parameters
function si(p, r = 5, t = 1) {
  return (p * r * t) / 100;
}

console.log(si(200, undefined, undefined));

let name = {
  fname: "karan",
  lname: "rawat",
};

function fullname() {
  return `${name.fname} ${name.lname}`;
}
console.log(fullname());

// using getter-setters
let person = {
  f_name: "karan",
  l_name: "rawat",
  get full_name() {
    return `${person.f_name} ${person.l_name}`;
  },
  set full_name(value) {
    if(typeof value !==String){
        throw new Error('string bhej bsdk');
    }
    let parts = value.split(" ");
    this.f_name = parts[0];
    this.l_name = parts[1];
  },
};

// calling
try {
  person.full_name = 12 ;
} catch (e) {
  alert(e);
}

console.log(person.full_name);


