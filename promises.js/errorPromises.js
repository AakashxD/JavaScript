function fetchData(url){
    return new Promise(function(resolve,reject){
        console.log("started downlaoding")
       setTimeout(function process(){
        console.log("hello");
        let data = "urldata";
        reject(data);
       },7000);
    });
}
console.log("start");
let x=fetchData("FIjs");
x.then(function success(value){
    console.log('value is',value);
    throw{error:"new error"};
},function err(err){
    console.log("error is",err);
})
console.log("end");
// 