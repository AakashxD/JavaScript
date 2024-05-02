console.log("start of the file");
setTimeout(function timer(){
    console.log("TIMER ! DoNE");
    let y=Promise.resolve("AAKASH");
    y.then(function Process(value){
        console.log("promises ?",value);
    }) 
},0);
let x=Promise.resolve("Aakash SINgh PRomises");
x.then(function pp(value){
    console.log("Whose PRomise ",value)
});
setTimeout(function timer2(){
    console.log("timer @ done")
},0)
console.log("end of the file");
// callback queue event queue