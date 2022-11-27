let userEmail = "golesuman345@gmail.com";
let password = "password";
// console.log(password.length);
// console.log(userName.toLocaleUpperCase());
// console.log(password.endsWith("rd"));


let userChecker = function(myString){

    if((myString.includes(345)) && (myString.length > 8))
    {
        return true;
    }
    else{
        return false;
    }
}


console.log(userChecker(userEmail));