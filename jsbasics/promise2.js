let promise1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("executing after 5s... ")

    },5000);
    resolve('promise1 resolved');
    return promise1;
})
let out=promise1.then(function(){
    let promise2=new Promise(function(resolve,reject){
        // setTimeout(()=>{
        //     console.log('set timeout 2 started.. ');
        // },5000);
        resolve("promise 2 resolved");
    }) 
   return promise2; 
})
let res=out.then((value)=>console.log(value));
let res2=promise1.then((value2)=> console.log(value2))