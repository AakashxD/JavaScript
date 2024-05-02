// set TimeOUT SET  intTerval
// these functions are not by default given us by js.
// A callback is a function that is passed to another function.
let g=function(){
  console.log("inside g");
  return function(){
    console.log("returned function")}
}
function gun(){
    console.log("inside gun");
}
// g only pointing to the function what ever is the return
