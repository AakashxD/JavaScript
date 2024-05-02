// task 
// 1. write a function to downlaod data from a url
//2. write a function to save that downnlaided data in AFILE  and return the filename/
// write a fucntion to uplaod the file written in previous step step to new url 
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
// let data = DownloadUrl("www.gg.com");
// let filename=writeFile(data);
// let response= uploaddata(filename,"www.google.com");
 // the above code will not worked in required fashion 
//  let downloadProm=fetchData("www.gg.com");
//  downloadProm.then(function processDownlaod(value){
//     console.log("downlaod promises fulfilled ");
//     let writeProme=writeFile(value);
//     writeProme.then(function procesWriting(value){
//         console.log("writing of file completed");
//         console.log(value);
//     })
//  });
// let downlaodPromises=fetchData("www.datadrive.com");
// downlaodPromises.then(function processDownload(value){
//     console.log("Downloading is done with the following value",value);
  
//     return "Aakash";
// });
let downlaodPromises=fetchData("www.datadrive.com");
 let x=downlaodPromises.then(function processDownload(value){
    console.log("Downloading is done with the following value",value);
    // promises .then() xwill return new promsies .then( return new promises)
    return value;
})
.then(function processWrite(value){
  return  writeFile(value); 
})
.then(function processUpload(value){
    return uploaddata(value);
    
})

// x.then(function process(value){
//     console.log("ejp",value);
// })
