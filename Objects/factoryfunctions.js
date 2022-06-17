function createCircle(radius)
{
    return {
        radius, //radius: radius 
        draw()
        {
            console.log('draw');
        }
        // location :location,
        // isVisible: true,
        // draw: function()
        // {
        //     console.log("drawing circle"); 
        //we can drop function inside the factory function
        // }
    };
    
}

const circle1 = createCircle(1);
console.log(circle1);
console.log(circle1.draw());
const circle2 = createCircle(2);
console.log(circle2);