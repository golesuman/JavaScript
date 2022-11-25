let myInfo = {
    name : "suman",
    age : 20, 
    address : "Lalitpur",
}


let changeNameOfObject = function(myObj)
{
    myObj["name"] = "hari";
    console.log(`My name is ${myObj["name"]}`);
    myObj['age'] = 23;
    console.log(`My age is ${myObj["age"]}`);

}


changeNameOfObject(myInfo);