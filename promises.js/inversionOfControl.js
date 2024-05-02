function fun(inputString,fn){
    let output=inputString.split(',');
    for(let i=0;i<output.length;i++){
        fn(output[i]);
    }
}
fun("name:sanket,subject:cse",function process(ip){
  let arr=ip.split(":");
  console.log("{",arr[0],"=>",arr[1] ,"}")
});
// if there is some part of code whose control we are parsing to someeelse ND WE DONT how that part will be ececuted.