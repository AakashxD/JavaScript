// promise.all()
/// take of input aND RETURN array 1
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
function writeFile(data){
   return new Promise(function (resolve,reject){
    console.log("stating writing",data," data in a file");
    setTimeout(function processWriting(){
        console.log("Writing completed");
        let filename="result.txt";
        console.log("written Succesfully");
        resolve(filename);
    },3000);
   });
}
function uploaddata(file,url){
    return new Promise(function (resolve,reject){
      console.log("upload started on Url",url,"filename is",file);
      setTimeout(function processUpload(){
        let result="success"
        console.log("uploading Done");
       resolve(result);
      },5000)  
    });
}
let downloadPromise=fetchData("ww.gg.com");
let writePromise=writeFile("dummy data");
let uploadPromise=uploaddata("test.txt","www.drive.google.com");
console.log("start");
Promise.all([downloadPromise,uploadPromise,uploadPromise]).then(function process(value){
    console.log(value);
})
// let x=process1();
