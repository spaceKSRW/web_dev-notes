// //get api
// // syntax : fetch(url,options);
// async function utility(){
// let content=await fetch('https://jsonplaceholder.typicode.com/posts/1');
// let output = await content.json();
// console.log(output);
// }
// utility();

//post/send call , same syntax 

async function helper(){

    let options = {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'karan',
          body: 'singh rawat',
          userId: 2002,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
    };
    let content=await fetch('https://jsonplaceholder.typicode.com/posts/1',options);
    let response=content.json();

    return response;
}

async function utility(){
let ans= await helper();
console.log(ans);
}

utility();