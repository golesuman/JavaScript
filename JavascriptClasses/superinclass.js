class Person{
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(`Greetings I am ${this.name}`);
    }
}

class Student extends Person{
    constructor(name)
    {
        console.log("Creating Student Class");
        super(name);
    }
}

let s1 = new Student('hari');
s1.greet();