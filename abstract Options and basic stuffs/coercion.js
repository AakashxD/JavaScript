// type intercoversion 
// implicit automatically type exist for [values] everything in JS is an object is false statement 
// abstract the operation are not a part of the ECMAscript lang they are defind 0here to solely to aid the specification of the semantics of the ecma script lang  
// polymorphic changes in different output in different condition.
// explicit 
// ToPrimitive abstract operation take an input argument and an optional pefered type argument  ..try convert input to an non object type value. else it will throw error
// the ToPrimitve function
/** in primitive  input type must be an object */ 
console.log(1-undefined);
console.log(10-[undefined]);
console.log(NaN-NaN);
console.log(10-"070");
console.log(10-{"a":10 ,valueOf() { return 9}});
let a=10;
console.log(11-a);
console.log(0xaf-74);
/** 0xaf is a hexa decimal having value aS 175
 * octal and hexadecimal
 * 
 * octal 0x A=11 where 0x start of hexadecimal A-f
  */
 console.log(0xf-1);
 console.log(9-[1]);

 console.log("Aakash"+"singh");
 console.log("5"+null);
 console.log("5"+undefined);
 /** arenot abtsract operations that means we can call them */
 console.log(5+true)
 