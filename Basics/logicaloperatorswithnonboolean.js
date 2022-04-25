// falsy 
// undefined
// null 
// false
// ''
// NaN

// anything that is not falsy is truthy

// console.log(false || 'Suman')
// console.log(false || 1)
// console.log(false || 1 || 2) //short circuiting
let userColor = 'red';
let defaultColor = 'Blue';
let currentColor = userColor || defaultColor;
let userColor1 = undefined;
let currentColor1 = userColor1 || defaultColor;
console.log(currentColor)
console.log(currentColor1)