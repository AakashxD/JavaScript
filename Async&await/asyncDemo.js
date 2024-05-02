function fetchData(url){
    return new Promise(function(resolve,reject){
        console.log("started downlaoding")
       setTimeout(function process(){
        console.log("hello");
        let data = "urldata";
        resolve(data);
       },7000);
    });
}
async function processing(){
    console.log("lol");
    let value1 = await fetchData("www.google.com");
    console.log("heehe");
    let value2= await fetchData("www.zootube.com");
    return value1+value2;
}
console.log("start");
setTimeout(function timer1(){console.log("timer1")},0);
console.log("bye");
let x=processing();
x.then(function (value){
console.log("Finallyprocessing resolves with",value);
});
setTimeout(function timer2(){console.log("timer2")},1000);
setTimeout(function timer3(){console.log("timer3")},0);
console.log("end");
// inside async func it look like sync but its not 
// Await through you out not actually 