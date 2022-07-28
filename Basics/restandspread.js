const hobbies = ['sports', 'programming'];
const person = {
    name : 'max', 
    age : 29,
    greet () {
        console.log("hi, i am " + this.name);
    }
};
// const copiedArray = hobbies.slice();
const copiedPerson = {...person};
const copiedArray = [...hobbies]; //spread operator -> copies the whole array or object
console.log(copiedArray); 

console.log(copiedPerson);

const toArray = (...args) => {   //rest operator
    return args;
};
console.log(toArray(1,2,3,4));