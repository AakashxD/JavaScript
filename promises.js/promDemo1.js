function fetchData(url){
    return new Promise(function (resolve,reject){
        console.log("going to start the downlaod");
        setTimeout(function process(){
            let data="dummy Downlaod data";
            console.log("download completed");
            resolve(data);

        },10000);
        console.log("time to mimic download started");
    });
}
// Promise is said to be setteld if it is not pending i.e if its either fulfilled or rejected
console.log("starting the program");
console.log("we are execpted to mimic downlaod");
x=fetchData("www.google.lol");// state pending-> fulfilled value undefined->dummy d data
console.log("new Promises object completed completely but downloading still going on");