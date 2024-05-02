var teacher='Aakash';
function fun(){
    console.log(subject);
    var teacher='hello';
    Singh=1;
    var subject='javascript';
    console.log(teacher);
    console.log(Singh);
}

fun();
console.log(Singh);
console.log(teacher);
//  lexical scope resolution

// in this parsing phase we only type not value
// allocation is done through parsing the code.
//Auto Global in JS if we keep on searching scope of variable in outer scopes & no where find it , we automaticAlly consider it in global scope
/**
 * this happens during execution 
 */