function process(){
 console.log("start");
 setTimeout(function exec(){
    console.log("Executed some task");
 },1000);
 for(let i=0;i<10000000000;i++){
  // task 
   }
 console.log("end");
 console.log("bye");
}
process();
// conditon to start executing taks from events queue is that 