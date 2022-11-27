let divideNumbers = (a, b) => {
   return a / b;
} 


try{
    const val = divideNumbers(1, 0);
    console.log(val);
}
catch(error)
{
console.log(error);
}