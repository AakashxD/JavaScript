console.log(Number.isNaN(NaN));
// to check NaN NUmber. doesnt do cocersion
console.log(Number.isNaN("123"));
function checkDirection(val){
    // tell us whether value is a neagtive value or postive
    if(val>=0){
        console.log("positive");
       console.log('right');
    }
    else{
        console.log('left');
    }

}