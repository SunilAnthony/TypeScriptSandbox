//Pass in the param as a customer type:Todo
function showTodo(todo) {
    console.log(todo.title + ': ' + todo.text);
}
var myTodo = { title: 'Trash', text: 'Take out the trash' };
showTodo(myTodo);
