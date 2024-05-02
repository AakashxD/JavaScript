// We Have more or less 3 types of scopes
/**
 * global  (outside of any function )
 * function
 * ( in a function scope the visibilty of variable/func^n is just inside the function)
 * block
 */
let name="sanket";
function greet(){
     console.log("greeting !",name);
     function test(){

     }
}
function fun(){
    console.log("have fun!",name);
}
greet();
fun();
function funny(){
   let y=9;
console.log(y);

}
funny();
