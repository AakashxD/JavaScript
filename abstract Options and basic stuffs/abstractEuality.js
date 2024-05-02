console.log(null==undefined);
console.log(undefined==null);
console.log(10=='20');
console.log(10=='10');
console.log('99'==99);
// ToNumber is prefered in numbers 
console.log(10=={valueOf(){return 10}});
// for objecT it will call ToPrimitive
{
let a=5;
if(a){
    console.log("hi there!");
}
if(a==true){
    console.log("by by");
}
}
