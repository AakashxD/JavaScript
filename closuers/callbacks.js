function fun(x, fn){
    // x -> number
    // fn-> callback FUnction

    for(let i=0;i<x;i++){
        console.log(i);

    }
    fn();
}
 fun(10,function log(){
    console.log("Custome Logger");
 });