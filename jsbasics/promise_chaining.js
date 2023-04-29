// async function fun(){
// return 69;
// }
// console.log(fun());  async function returns promise

async function utility() {
  let spacex = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("nasa wale bahut khatarnak hai!!");
    }, 10000);
  });

  let modi = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("15000");
    }, 20002);
  });

let sx= await spacex; // awaits waits for promise to completely successfully
let pm=await modi;

return [sx,pm];
}