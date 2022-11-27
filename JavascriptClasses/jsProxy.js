let student = {
    name: 'felix', 
    age: 20
}

const handler = {
    get: function(obj, prop)
    {
        return obj[prop] ? obj[prop] : 'property does not exist';
    }
}


const proxy = new Proxy(student, handler);

console.log(proxy.name);


console.log(proxy.age)

console.log(student);