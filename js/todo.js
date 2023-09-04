const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(event) {
  const li = document.createElement("li");
  toDoList.appendChild(li);
  li.id = event.id;
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = event.Text;
  const btn = document.createElement("button");
  li.appendChild(btn);
  btn.innerText = "🌱";
  btn.addEventListener("click", deleteToDo);
}

function toDoSubmit(event) {
  event.preventDefault();
  const TODO_INPUT_VALUE = toDoInput.value;
  toDoInput.value = "";
  const TODO_INPUT_VALUEObj = {
    Text: TODO_INPUT_VALUE,
    id: Date.now(),
  };
  toDos.push(TODO_INPUT_VALUEObj);
  paintToDo(TODO_INPUT_VALUEObj);
  saveToDos();
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
