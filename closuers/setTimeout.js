// setTimeout(function execute(){
//    console.log("task complete");
// },3000);
let id1=setTimeout(function execute1(){
    console.log("tsk complt 1")
},6000);
let id2=setTimeout(function executed2(){
    console.log("task compeleted 2");
    clearTimeout(id1);
},5000)