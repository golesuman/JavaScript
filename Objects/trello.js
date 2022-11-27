let myTodos = {
    day: 'Sunday',
    meetings : 0,
    meetDone : 0,

}

function addMeetings(todo, meet=0){
    todo['meetings'] = meet;


}

function removeMeetings(todo){
    todo['meetings'] = 0;
    todo['meetDone'] = 0;
}

function getSummaryOfDay(todo)
{
    console.log(`I had ${todo['meetings']} meetings and ${todo['meetDone']} was done` );
}

addMeetings(myTodos, 5);
getSummaryOfDay(myTodos);
removeMeetings(myTodos);

console.log(myTodos);