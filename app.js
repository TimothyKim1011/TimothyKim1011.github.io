// html에서 login-form 가져오기
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //굳이 바꿔주는 이유가 있을까?
const USERNAME_KEY = "username";

// submit 함수
function loginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const loginInputValue = loginInput.value;
  localStorage.setItem("USERNAME_KEY", loginInputValue);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${loginInputValue}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if (savedUsername === null) {
  //show the form
  loginForm.addEventListener("submit", loginSubmit);
} else {
  // show the greetings
  greeting.innerText = `Hello, ${savedUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}