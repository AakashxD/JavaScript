const add= (function exec(){
  let counter=0;
  return function process(){
    counter+=1;
    return counter;
  }
})();
console.log(add());
console.log(add());
console.log(add());