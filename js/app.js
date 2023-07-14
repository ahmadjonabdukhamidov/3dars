const randomWordEl = document.getElementById("random-word");
const inputEl = document.getElementById("user-word");
const scoreEl = document.querySelector(".score span");
const timeEl = document.querySelector(".time span");
const modalEl = document.getElementById("modal-word");
const modalTitleEl = document.getElementById("modal-title");
const modalButtonEl = document.getElementById("button");
const spanEl = document.getElementById("level");

function repeat() {
  inputEl.focus();

  let randomWorld;
  let counter = -1;
  let userTime = 10;

  const changeWord = () => {
    const rendomNumber = Math.floor(Math.random() * words.length);
    randomWorld = words[rendomNumber];
    randomWordEl.textContent = randomWorld;
    counter++;
  };
  changeWord();

  inputEl.addEventListener("input", () => {
    const userWord = inputEl.value;

    if (userWord == randomWorld) {
      changeWord();

      userTime += 3;
      inputEl.value = "";
      scoreEl.textContent = `${counter}`;
    }
  });

  const timeInterval = setInterval(() => {
    if (userTime > 0) {
      userTime--;
      timeEl.textContent = `${userTime}s`;
    } else {
      spanEl.textContent = `${counter}`;
      openMod();
      clearInterval(timeInterval);
    }
  }, 1000);
}

repeat();

modalButtonEl.addEventListener("click", () => {
  closeMod();
  counter = 0;
  inputEl.value = "";
  scoreEl.textContent = `${counter}`;
  repeat();
});

function openMod() {
  modalEl.style.display = "block";
}

function closeMod() {
  modalEl.style.display = "none";
}
