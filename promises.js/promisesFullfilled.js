// if we call reslove func we consider it fulfilled 
console.log("start of the file");
setTimeout(function timer(){
    console.log("TIMER ! DoNE")
},0);
for(let i=0;i<1000000;i++){
   // something  
}
let x=Promise.resolve("Aakash SINgh PRomises");
x.then(function pp(value){
    console.log("Whose PRomise ",value)
});
setTimeout(function timer2(){
    console.log("timer @ done")
},0)
console.log("end of the file");
// micro task Queue has a higher priority than event Queue..
