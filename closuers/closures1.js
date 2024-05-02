function todo(task){
    setTimeout(function fun(){
        console.log("complete",task)
    },5000);
    task="dayananda";
    console.log("end of todo");
}
    console.log("starting");
    todo("assignment");
    console.log("ending");
    // at the time instance when function fn will be called the todo function is already over.
    // this happenss due to closuers.
    /**
     * closures is when a function  "remembers" its lexical scope even when the function is executed outside that lexical scopes"
     */
    // if todo is completed iy will be removed from callstack how actually the variables still presist.
     ``