function fun(){
    console.log("funCalled")
    setTimeout(function exec(){
        console.log("Executed some task 7");
     },7000);

     setTimeout(function exec2(){
        console.log("Executed some task 1");
     },1000);
}
fun();
//if 10x0
for(let i=0;i<10000000000;i++){
    // task 
     }
     setTimeout(function exec3(){
        console.log("Executed some task 0");
     },0);
