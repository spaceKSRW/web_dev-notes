async function order(){
 try{
await abc; // dosent exist
 }  
 catch(error){
console.log("abc dosent exist!!");
 } 
 finally{
console.log("code runs anyway!!");
 }
}
order().then(()=>{
    console.log("haa chl bhag ja yha se"); 
})