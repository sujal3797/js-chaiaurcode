const accountId = 144533
let accountEmail = "sujal@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState

// accountId = 2 //Not Allowed

accountEmail = "hello.com"
accountPassword = "4322"
accountCity = "Pune"


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/