const t1 = performance.now();

for (let i = 1; i <= 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is para" + i;
  document.body.appendChild(newElement);
}

const t2 = performance.now();

console.log("this took : " + (t2 - t1));

// optimizing

const t3 = performance.now();

let mydiv = document.createElement("div");
for (let j = 1; j <= 100; j++) {
  let element = document.createElement("p");
  element.textContent = "this is para" + j;
  mydiv.appendChild(element);
}
document.body.appendChild(mydiv);
const t4 = performance.now();

console.log("this took : " + (t4 - t3));

//reflow- calculating position and dimension of page elements
//repaint - process of drawing pixels to screen

// document fragment

const c5 = performance.now();
let fragment = document.createDocumentFragment();
for (let i = 1; i <= 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "this is para" + i;

  fragment.appendChild(newElement);
}
document.body.appendChild(fragment);
const c6 = performance.now();
console.log("this took : " + (c6 - c5));

//note  , js is single threaded language
