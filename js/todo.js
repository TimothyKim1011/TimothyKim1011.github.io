const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

function toDoDelete(event) {
  console.log(event);
  const parentLi = event.target.parentElement;
  parentLi.remove();
}

function paintToDo(event) {
  const li = document.createElement("li");
  toDoList.appendChild(li);
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = event;
  const btn = document.createElement("button");
  li.appendChild(btn);
  btn.innerText = "🌱";
  btn.addEventListener("click", toDoDelete);
}

function toDoSubmit(event) {
  event.preventDefault();
  const TODOINPUTVALUE = toDoInput.value;
  const savedToDoInputValue = localStorage.setItem("todo", TODOINPUTVALUE);
  toDoInput.value = "";
  paintToDo(TODOINPUTVALUE);
}

toDoForm.addEventListener("submit", toDoSubmit);
