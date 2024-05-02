// task:
// write a function to downlaod data from a url
// write a function to save that downlaod data in a file and return the filename
// write a function to upload the file written in previous step to new url
function fetchCustom(url,fn){
    console.log("downloading start");
     setTimeout(function Process(){
        console.log("Download complete");
        let response="dummy data";
        fn(response);
        console.log("ending Function");
    },3000);
}
function writefile(data,fn){
    // this is function writes data in anew file
    console.log("Started writing data",data);
    setTimeout(function process(){
        console.log("wrirting Completed");
        let fileName="output.text";
        fn(fileName);
        console.log("Writing ended")
    },4000);
}
function uploadFile(fileName,newurl,fn){
    console.log("Upload started");
    setTimeout(function process(){
        console.log("file",fileName,"uploaded sucessuly on ",newurl);
        let uploadResponse="success";
        fn(uploadResponse);
    },2000);
}
fetchCustom("www.google.com",function downloadcallabck(response){
    console.log("download Response",response);
    writefile(response,function writecallback(fileNameResponse){
        console.log("new file name",fileNameResponse);
        uploadFile(fileNameResponse,"www.hello.com",function process(uploadResponse){
         console.log("done",uploadResponse);
        })   
    })
});