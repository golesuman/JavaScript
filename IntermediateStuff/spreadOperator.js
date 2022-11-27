const person = {
    name : 'john',
    age : 10,
    address : "ktm",
    giveDetails: function(){
        return `Name is ${this.name}, age is ${this.age} and lives in ${this.address}`;

    }


}
const names = ['john', 'hari', "shyam", "laxman"];
const copiedArray = [...names];

const copiedObject = {...person};

console.log(copiedArray);

console.log(copiedObject);

// details = person.giveDetails();
// console.log(details);
const details = person.giveDetails();
console.log(details);