// whenever we initialize a variable it will let access only in the block always give you block scopes
// re decleartion is not allowed in let
{
    let x=10;
    console.log(x);
}
function fun(){
    console.log(y);
   // but  u can reassign the value
    let y=8;
    // block access only
}
// if we declare let outside of block still its nt called a global variable.
