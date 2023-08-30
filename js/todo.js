const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");
// const toDoInputValue = toDoInput.value;

function toDoSubmit(event) {
  event.preventDefault();
  const TODOINPUTVALUE = toDoInput.value;
  const savedToDoInputValue = localStorage.setItem("todo", TODOINPUTVALUE);
  toDoInput.value = "";
}

toDoForm.addEventListener("submit", toDoSubmit);
