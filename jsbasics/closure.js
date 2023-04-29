let b=19;
function add(a){
    return a+b;
}
let ans=add(1);
console.log(ans);

//closure
function func(){

    let a =100;

     return function fun2(b){
        let c=180;
        return a+b+c;
    }
}
let vals=func();
console.log(vals(10));

// A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the
// variable declaration. But the opposite is not true ,the variables defined inside a function will not be accessible outside that function.