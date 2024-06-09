var heading = document.createElement("h1");
var input = document.createElement("input");
var button = document.createElement("button");
var headingContainer = document.getElementsByTagName("div")[0];
var todoListContainer = document.getElementsByTagName("div")[1];
heading.textContent = "Todo List";
input.placeholder = "add todoList";
button.textContent = "add Todo";
button.onclick = () => addTodo();
headingContainer.appendChild(heading);
headingContainer.appendChild(input);
headingContainer.appendChild(button);
var todoList = [];
function addTodo() {
  todoList.unshift(input.value);
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
    render();
    }
    function updateTodo(index) {
        input.value = todoList[index];
        todoList.splice(index, 1);
        render();
}