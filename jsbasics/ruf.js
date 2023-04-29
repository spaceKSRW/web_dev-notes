// function eventFunction(){
//     console.log('I have clicked on the document');
// }

// document.addEventListener('click',eventFunction);
//type cohersion converts data of same type

// document.removeEventListener('click',eventFunction);

// const content = document.querySelector("#wrapper");
// content.addEventListener("click", function (event) {
// console.log(event);
// });

// let links = document.querySelectorAll("a");
// let third_link = links[2];
// third_link.addEventListener("click", function (event) {
// event.preventDefault();
// console.log("fuck off willya");
// });
// function paraStatus(event) {
//   console.log("i have clicked in para"+event.target.textContent);
// }
// let mydiv = document.createElement("div");
// mydiv.addEventListener("click", paraStatus);
// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "this is para" + i;

//   mydiv.appendChild(newElement);
// }
// document.body.appendChild(mydiv);

let element= document.querySelector('#wrapper');
element.addEventListener('click',function(event){
  if(event.target.nodeName==='SPAN')
  {
  console.log("clicked on span : "+ event.target.textContent);
  }
});