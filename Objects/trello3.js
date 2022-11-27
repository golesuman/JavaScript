let myTodos = {
    day : "Monday", 
    meetings : 0, 
    meetDone : 0,


    updateDay: function(day){
        this.day = day;
    }

}


myTodos.updateDay("Tuesday");
console.log(myTodos["day"]);
console.log(myTodos);

