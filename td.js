let todos = [];

function createTodoComponent(todo){
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const button = document.createElement("button");
    button.innerHTML = "Delete";
    h1.innerHTML = todo.title;
    div.append(h1);
    div.append(button);
    return div;
}

function render(){
    document.querySelector("#todos").value = "";
    for(let i=0; i<todos.length;i++){
        const element = createTodoComponent(todos[i]);
        document.querySelector("#todos").appendChild(div);
    }
} 