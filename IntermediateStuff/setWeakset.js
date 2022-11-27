const set1 = new Set();

set1.add(1);
set1.add(2);

console.log(set1);


const set2 = new Set([1, "hello", "This world",{count: 3}])

console.log(set2);
set2.delete(1);

console.log(set2);


console.log(set1.values());

console.log(set2.values());

for (let val of set2.values()){
    console.log(val);
}


/// js weakset can only contain objects wheras
// a set can contain any data types


const weakS = new WeakSet();
console.log(weakS);

let obj = {
    message : "hi", 
    sendMessage : true,
}


weakS.add(obj);

console.log(weakS);
