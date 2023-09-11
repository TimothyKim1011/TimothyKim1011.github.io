const wholeForm = document.getElementById("whole-form");
const secondRowForm = document.getElementById("second-row-form");
const thirdRowForm = document.getElementById("third-row-form");
const guessNumForm = document.querySelector(
  "#second-row-form span:nth-child(2)"
);
const thirdRowFirstSpan = document.querySelector(
  "#third-row-form span:first-child"
);
const thirdRowSecondSpan = document.querySelector(
  "#third-row-form span:last-child"
);

const guessNum = guessNumForm.value;

function onPlaySubmit(event) {
  event.preventDefault();
  thirdRowFirstSpan.innerText = `You chose: ${parseInt(guessNum)} `;
  thirdRowSecondSpan.innerText = `the machine chose: ${parseInt(guessNum)} `;
  thirdRowForm.classList.remove("hidden");
}

wholeForm.addEventListener("submit", onPlaySubmit);
