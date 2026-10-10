const accountId = 144553
let accountEmail = "palayushman396@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//  accountId = 2 not allowed

accountEmail = "ap@ap.com"
accountPassword = "9936"
accountCity = "Bengaluru"


console.log(accountId);

/*
Prefer not to use var bcz of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

