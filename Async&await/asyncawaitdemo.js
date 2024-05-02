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
async function processing(){
    let downloaddata= await fetchData("www.gg.com");
    console.log("YE");
    let fileN=await writeFile(downloaddata);
    console.log("BE");
    let uploadResponse=await uploaddata(fileN,"www.ggoggole.com");
    console.log("BYE");
    console.log("completed",uploadResponse);
    return true;
}
console.log("Start");
processing();
console.log("end");