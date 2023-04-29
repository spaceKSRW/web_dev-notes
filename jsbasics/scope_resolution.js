{
    let a=5;
    console.log(a);
}
// console.log(a); scope not defined

function walk(){
    var s=19;
    console.log(s);
}
walk();
// console.log(s); ye error dega cuz , var is only defined inside the function
// let is defined only inside the blocks
// if var is not defined under the function , outside , then its declared globally

function a(){
    const a =19;
    // console.log(a);
}
function b(){
    const a=190;
    // console.log(a);
}
