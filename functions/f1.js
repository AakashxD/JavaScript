// in js we can pass function as an argument to another function
// var  x=function(){
//     console.log("lnssl");
// }
// gun (function(){
//     console.log("harli_devision");
// // })
// function fun(){
//     console.log("fun Called");
// }
// function gun(fn){
//     console.log("inside gun");
//     fn();
//     console.log("leaving gun");
//     console.trace();
// }
//     gun (function(){
//         console.log("new Function passed")
//     }
//     );
//     gun(fun);

// scopes of a functions
var x= function gun(){
    console.log("gun");
}
console.log(typeof x);
gun();
// function fun(){
//     function gun(){

//     }
// }