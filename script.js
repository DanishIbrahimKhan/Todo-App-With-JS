var heading = document.createElement("h1");
var input = document.createElement("input");
var button = document.createElement("button");
var deleteAll = document.createElement("button");
var headingContainer = document.getElementsByTagName("div")[0];
var todoListContainer = document.getElementsByTagName("div")[1];
heading.textContent = "Todo List";
input.placeholder = "add todoList";
button.textContent = "add Todo";
deleteAll.textContent = "delete all"
button.onclick = () => addTodo();
deleteAll.onclick = () => {todoList = [] 
    setLocalStorage("todosList",[])
    render()};

headingContainer.appendChild(heading);
headingContainer.appendChild(input);
headingContainer.appendChild(button);
headingContainer.appendChild(deleteAll)
var todoList = JSON.parse(localStorage.getItem("todosList"));
function addTodo() {
    todoList.unshift(input.value);
    localStorage.setItem("todosList", JSON.stringify(todoList))
  input.value = "";
  render();
}
function render() {
  todoListContainer.innerHTML = "";
  todoList.map((value, index) => {
    let p = document.createElement("p");
    let button = document.createElement("button");
    let updateButton = document.createElement("button");
    button.textContent = "delete";
    updateButton.textContent = "edit";
    button.onclick = () => deleteTodo(index);
    updateButton.onclick = () => updateTodo(index);
    p.textContent = value;
    todoListContainer.appendChild(p);
    todoListContainer.appendChild(button);
    todoListContainer.appendChild(updateButton);
  });
}
function deleteTodo(index) {
    todoList.splice(index, 1);
    setLocalStorage(todoList)
    render();
    }
    function updateTodo(index) {
        input.value = todoList[index];
        todoList.splice(index, 1);
        setLocalStorage(todoList);
        render();
}
function setLocalStorage(value){
    localStorage.setItem("todosList",JSON.stringify(value))
}
render();