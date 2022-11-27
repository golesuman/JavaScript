class Animal{
    constructor(name, species)
    {
        this.name = name;
        this.species = species;
    }

   getName()
   {
    console.log(this.name);
   }

   getSpecies()
   {
    console.log(this.species);
   }

   setName(name)
   {
    this.name = name;
   }


   setSpecies(species){
    this.species = species;
   }

}


class Dog extends Animal{

}


let d1 = new Dog(name="John", species="dog");
d1.getName();
d1.getSpecies();
d1.setName("bar");
d1.setSpecies("cat");
console.log(d1.name, d1.species);
// console.log