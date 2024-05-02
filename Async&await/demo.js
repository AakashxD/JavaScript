function fun(){
    return new Promise(function(resolve,reject){
       setTimeout(function process(){
        console.log("resolved");
        resolve(123);
       },5000);
    })
}
let x= fun();
x.then(function exec(value){
    console.log("value is",value);
    return 100;
})
x.then(function exec2(value){
    console.log("yo the value",value);
    return 200;
})
