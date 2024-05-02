function todo(task){
    setTimeout(function fun(){
        console.log("hello",task);
    },2000)
}
console.log("starting");
todo("starting")
console.log("ending")