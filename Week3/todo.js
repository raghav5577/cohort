let ctr = 1;
function removeTodo(index){
    const element = document.getElementById(index);
    element.parentNode.removeChild(element);
}
function addTodo(){
    const value = document.querySelector("input").value;
    const newTodo = document.createElement("div");
    newTodo.setAttribute("id",ctr);
    newTodo.innerHTML ="<div>" + ctr+ ". "+ value + "<div><button onclick='removeTodo("+ctr+")'>delete</button></div></div>";
    ctr = ctr + 1;
    document.querySelector("body").appendChild(newTodo); 
}