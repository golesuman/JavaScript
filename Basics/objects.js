const person = {
    name : 'Suman',
    age : 20,
    greet() {
        console.log("hello, I am " + this.name);
    }

};
console.log(person);
console.log(person['name']);
person.greet();
