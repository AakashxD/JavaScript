// readability inhansecers 
// promisess are specials object. 
// how promises work behind the seen the promise object we create has 4 major properties
// status-> it shows current promise status/state ->3 pending, `fulfilled`,reject.
// (Imp)value-> when status of the  promises is pending this value property is undefined. once its gets resolved then undefined converts into NEw Value/(return value) So the value property acts like a placeholder till the time promises function
// on fullfillment-> THis is an array which conatins function that we attach to our promsies object ( to a promises object we can attaced some fucntion using .then() method) 
// when the value property is update from undefinef to the new value js goingg chance to these attached  func onr =by one with the value property so 
// axios.get('url')
// .then(function response())