names = ['hari', 'shyam', 'laxman', 'shiv', 'ganesh']

for(let x of names){
    console.log(x);
}



fruits_prices = [["apple", 200], ["banana", 120], ["orange", 280]]

const fruits = new Map(fruits_prices);

console.log(fruits);

for (const fruit of fruits.keys()){
    console.log(fruit);
}

for (let fruit_ of fruits.values()){
    console.log(fruit_);
    
}


for (let [k, val] of fruits.entries())
{
    console.log(k + '=' + val);
}