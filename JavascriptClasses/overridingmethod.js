class Person{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    getInfo()
    {
        console.log(`I am ${this.name} Person and I am ${this.age}`);
    }
}

class Student extends Person{
    constructor(name, age){
        super(name, age);
    }

    getInfo()
    {
        console.log(`I am ${this.name} Student and ${this.age} years old`);
    }
}

let s1 = new Student("hari", 22);
s1.getInfo();