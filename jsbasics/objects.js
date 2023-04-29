let rectangle={
    len:12,
    bre:100
};

if('color' in rectangle){
    console.log('its present');
}
else{
    console.log('not present');
}

//object cloning

let src={
a:10,
b:20,
c:30
};

let dest={};
// 1 iteration

for(let keys in src){
dest[keys]=src[keys];
}
console.log(dest);


// 2 assign

let dest2=Object.assign({},src);
console.log(dest2);


// 3 spread
let dest3={...src};
console.log(dest3);

//object string

let name=new String('karan');

let message='you will always remain as a virgin';
let words=message.split(' ');
console.log(words);

let msgs=`vrecha, ${name}   
vrecha
va 
hadeysin
anytime satak you are the sin 
`;
console.log(msgs);