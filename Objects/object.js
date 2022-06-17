
//object oriented programming
const circle = {
    radius: 10, 
    location : {
        x: 4,
        y: 2,
    },
    isVisible: true,
    draw : function ()
    {
        console.log('draw');
    }
   
};



circle.draw();
console.log(circle.location['x'])

