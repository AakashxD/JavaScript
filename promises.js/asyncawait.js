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
async function processing(){
    try{
        let downloadPromise=await fetchData("www.google.com");
        return downloadPromise;
    }catch(err){
        console.log("data is rej",err);
    }
}
processing();
//  