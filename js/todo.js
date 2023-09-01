const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

function toDoDelete(event) {
  const parentLi = event.target.parentElement;
  parentLi.remove();
}

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
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
  const TODO_INPUT_VALUE = toDoInput.value;
  toDoInput.value = "";
  toDos.push(TODO_INPUT_VALUE);
  paintToDo(TODO_INPUT_VALUE);
  saveToDos();
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
