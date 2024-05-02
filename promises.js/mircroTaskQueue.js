function dummyProcess(){
    return new Promise(function (resolve,reject){
setTimeout(function (){
    resolve("timmer Promsies")
},1000);
    });
}
console.log("start of the file");
setTimeout(function timer(){
    console.log("TIMER ! DoNE");
    let y=dummyProcess();
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