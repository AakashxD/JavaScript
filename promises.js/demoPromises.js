// hoW CAN WE Write a function to download some data from  FROM A URL and not use callbacks 
// instead use promises
// To creat a promise call the promises 
// the promise constructer will take a callabck as an arrgument 
// ithe callback passed inside constructer accept 
function fetch(url){
    return new Promise(function (resolve, reject){
      console.log("starting fetching from the url ",url);
      setTimeout(function process(){
        let data="dummy Data";
        console.log("completed log");
        
        resolve(data);
      },4000);
    });
}
function demo2(val){
    return new Promise(function (resolve,reject){
       console.log("start");
        setTimeout(function process(){
        console.log("completed timer");
        if(val%2==0){
            resolve("even");//success
        }
        else{
            reject("odd");//throw an error
        }
       },10000);
       console.log("somewhere");
    });
}
let a=demo2(44);
console.log(a);