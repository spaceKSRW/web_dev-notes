// function one(call_two){
// console.log("step 1 complete , please call step 2");
// call_two();
// }

// function two(){
//     console.log("step2");
// }
// one(two);

// let order=(call_production)=>{
//     console.log("order successful!!");
//     call_production();
// };
// let production=()=>{
// console.log("order received");
// };

// order(production);

let stocks={
    fruits:['mango','strawberry','grapes','blacks','asians'],
    liquid:['water','ice'],
    toppings:['chocolate','peanuts'],

};

let order=(fruitName,call_production)=>{
    setTimeout(()=>{
     console.log(`${stocks.fruits[fruitName]} was selected`);
     call_production();
    },2000);

};

let production=()=>{
    setTimeout(()=>{
        console.log("production has started!!");
        setTimeout(()=>{
          console.log("fruits have been chopped!!");
        },2000)
    },1000);

};
order(0,production);
