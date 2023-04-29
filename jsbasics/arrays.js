let numbers=[1,4,5,6];
console.log(numbers);

//insertion in arrays

//front push
numbers.push(69);
console.log(numbers);

//[peeche se]

numbers.unshift(96)
console.log(numbers);

// in between

numbers.splice(2 ,0,'karan','singh','rawat',567);
console.log(numbers);

//searching, returns -1 if not present
console.log(numbers.indexOf(2));
//includes return boolean
console.log(numbers.includes('karan'));
//array of objects

let courseArr=[
    {name:'karan', age:19},
    {name:'aditya' , age:64}
];
let student=courseArr.find(function(course){
    return course.age==19;
})
// another method
let stud2=courseArr.find(course=>course.name=='aditya');
console.log(student);
console.log(stud2);
//removing element

//first
let num=[1,2,38,8,5,6];
num.pop();
console.log(num);

//last
num.shift();
console.log(num);

//at a position

num.splice(2,1);//(at what index , how many values)
console.log(num);

//emptying array , numbers.splice(0,num.length)
num.length=0;
console.log(num);

//concatination
let first=[1,2,3,4];
let second=[5,6,7,8];
let combined=first.concat(second);
console.log(combined);

//slicing array
let sliced=combined.slice(2,4);
console.log(sliced);


//combining using spread
let newcomb=[...first,'b',...second,'c'];
console.log(newcomb);

//iterating over array
let arr=[10,20,30,40,50,60,70,80,90];
for(let i in arr)
{
    console.log(i);
}
// using foreach 

arr.forEach(function(i){
    console.log(i);
})
//converting to arrow fuction
arr.forEach(i=>console.log(i));

let nums=[10,20,30,40,50,60,70];
let joined=nums.join(',');

console.log(joined);

//split -- ye array create kar dega
let message='every sixty seconds in africa a minute passes';
let parts=message.split(' ');
console.log(parts);

//wapas join karna hai
let joint=parts.join('damn!!');
console.log(joint);

//sorting arrays

nums.sort();
console.log(nums);


//filter arrays
let nuns=[1,2,-1,-2,-3];
let filter=nuns.filter(function(vals){
    return vals<0;
});
console.log(filter);
//using arrow functions

let filt=nuns.filter(i=>i<0);
console.log(filt);

//mapping arrays maps each element of array to something else

let ar=[6,7,8,9,69];
let item=ar.map(function(value){
    return 'student_no : '+value;
});
console.log(item);

//mapping with objects
let numss=[1,8,-4,-23];
let fillter=numss.filter(v=>v>0);

let items=fillter.map(function(value){
    let obj ={num:value};
    return obj;
});
console.log(items);


//reducing an array

let Array=[1,2,3,4];

let totalSum=Array.reduce((accumulator,currentValue)=>accumulator+currentValue);
console.log('total sum : ')
console.log(totalSum);

