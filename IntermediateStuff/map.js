const map1 = new Map();
map1.set('info', {name: 'suman', age:20});

console.log(map1);

console.log(map1.get('info'));

console.log(map1.has('info')); //gives true


console.log(map1.delete('info'));

console.log(map1);