//set timeout is an asynchronous function then executed when call stack is empty
setTimeout(function(){
    console.log("third");
},3000)

function sync(){
    console.log("hello");
}

for(let i=0;i<10000;i++){
    sync();
}

console.log("last mai print");