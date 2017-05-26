interface Todo{
    title:string;
    text: string;
}

//Pass in the param as a customer type:Todo
function showTodo(todo: Todo){
    console.log(todo.title + ': '+todo.text);
}

let myTodo = {title: 'Trash', text: 'Take out the trash'};

showTodo(myTodo);