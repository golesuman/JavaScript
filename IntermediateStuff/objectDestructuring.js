const person = {
    name : "hari", 
    age : 20,
    address : "kathmandu",

    greet() {
        console.log(`This is ${this.name} and I am ${this.age}`);
    }

}

const printDetails = ({ name }) => {
    console.log(name);
}


const {name, age} = person;

console.log(name, age);
