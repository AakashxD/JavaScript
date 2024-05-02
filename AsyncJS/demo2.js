function process(){
    console.log("start");
    setTimeout(function exec(){
       console.log("Executed some task");
    },10000);
    setTimeout(function exec(){
        console.log("Executed some task 2");
        // queue exectution 
     },5000);
    for(let i=0;i<10000000000;i++){
     // task 
      }
    console.log("end");
   
   }
   process();