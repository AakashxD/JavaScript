// we cant pridict how console.log work
// console.log is async or sync its depemd on runtime browser for POSEx system it is syncronous. file.io
// not-> promises
obj={x:5}
console.log(obj);
obj.x=10;
console.log(obj);
// in events queue we receive call back
// DisAdvantages of Callback
/**
 * callbach hell(not a disA)-> nesting callbacks code readability got hammper and makes a code hard to read
 * Inverse
 */
// Promises are speacials JS Objects that are also conserded readability enhancers they get immediately returned from a function setup ro return a promises
// they acts as placeholders for the data we hope to get from some feature task.
// we also attach the funvtionality we want to defau until the feature is done.
// So promises do 2 things one inside js and outide Js.
// It signs
// How to create a promises ??
// How to consume a promises
// We Want Go That way We 