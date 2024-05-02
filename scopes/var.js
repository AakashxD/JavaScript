{   function fun(){
    console.log(x);// getting undefind because of lexical scoping
    var x=10;
    console.log(x);
}
}
// }
// {
//     var x=10;//global available for all 
//     console.log(x);
// }
// console.log(x);
// if(true){
//      var a=9;

// }
// if(false){
//     var z=9;

// }
// console.log(a);
// console.log(z);
fun();
