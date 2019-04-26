/*function showTodo(todo:{tittle:string, text: string}) {
    console.log(todo.tittle + ' ' + todo.text);
}

let myTodo = {tittle: 'Trash', text: 'take out trash'}

showTodo(myTodo);
*/

interface Todo {
    tittle: string;
    text: string;
}

function showTodo(todo:Todo) {
    console.log(todo.tittle + ' ' + todo.text);
}

let myTodo = {tittle: 'Trash', text: 'take out trash'};
console.log(myTodo);