// The promise consumption is the main Beauty using which we will avoid inversion of control whenever we call a function returning a promises we will get a promise object which is like any js object that we can store in a variable 
// ->will JS wait for promsie to be resolved if it involves any piece of code 
// creation of prmises invloves sync piece of code it will wait  other wise not 
// fulfillememt happens after a time 
// we can use .then() function on the promises object to bond the fucntion we want to execute once we fulfill a promise 
// the .then() function take function as an argument that we want to execute after promise fulfills and the argument function take value property as 