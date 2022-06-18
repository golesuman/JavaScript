const circle = {
    radius : 1, 

};

circle.radius = 5;
circle.color = 'red';
circle.draw = function( )
{
    console.log('this is the circle');
}
console.log(circle);
console.log(circle.draw())



//cannot reassign the const variable