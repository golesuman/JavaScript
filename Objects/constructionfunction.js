function createCircle(radius)
{
    return {
        radius, 
        draw()
        {
            console.log('draw');
        }
    };
}

function Circle(radius)  // construction function
{
    this.radius = radius;
    this.draw = function()
    {
        console.log('draw');
    }
}

const circle = new Circle(1);
