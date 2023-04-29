// // let mypromise=new Promise(function(resolve,reject){
// //     console.log('iam inside promise');
// //     resolve(2002);
// // });
// // console.log('first');

// // let mypromise=new Promise(function(resolve,reject){
// //     setTimeout(function(){
// //         console.log("iam inside promise");
// //     },10000);
// //     reject(new Error('FATAL ERROR DETECTED!!'));// will mark reject
// //     // resolve(90);  will make fulfilled request
// //     //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// // });

// //similarly many promises can be created
// let mypromise1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("iam inside promise1");
//     },1000);
//     reject(new Error('FATAL ERROR DETECTED!!'));// will mark reject
//     // resolve(90);  will make fulfilled request
//     //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// });

// let mypromise2=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("iam inside promise2");
//     },1000);
//     reject(new Error('FATAL ERROR DETECTED!!'));// will mark reject
//     // resolve(90);  will make fulfilled request
//     //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// });
let mypromise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("iam inside promise3");
    },5000);
    reject(new Error('fuck off'));  

    // resolve(90);  will make fulfilled request
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
});

mypromise3.then(function(value){ // ye value lega
    console.log(value)
});

mypromise3.catch((val)=>{
console.log('FATAL ERROR HAS BEEN ENCOUNTERED')
});

console.log('last line');

