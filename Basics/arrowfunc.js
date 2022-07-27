const name = 'Max';
let age = 20;
const hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        "name" + userName + 'age :' + userAge + 'has hobby ' + userHasHobby
    );
}

const add = (a, b) => a + b;
const addOne = a => a + 1;

console.log(add(4, 6));
console.log(addOne(2));