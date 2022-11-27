class Person{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;

    }
    get PersonName()
    {
        return this.name
    }

    set PersonName(x)
    {
        this.name = x;
    }
}

let p1 = new Person("suman", 20);

console.log(p1.PersonName);
p1.PersonName = "sushil";
console.log(p1.name);
console.log(p1);