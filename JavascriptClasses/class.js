class Person{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    giveName() {
        console.log(`The name of the person is ${this.name} ` + 
        `and age is ${this.age}`);
    }
}

let p1 = new Person('suman', 20);
p1.giveName();

