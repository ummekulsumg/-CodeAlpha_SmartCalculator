let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    let result = eval(display.value);
    historyList.innerHTML += `<li>${display.value} = ${result}</li>`;
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
}

function clearHistory() {
  historyList.innerHTML = "";
}

document.addEventListener("keydown", (e) => {
  if ("0123456789+-*/.".includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculateResult();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});

function toggleMode() {
  const body = document.body;
  const toggleBtn = document.getElementById("modeToggle");

  if (body.classList.contains("light")) {
    body.classList.replace("light", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    body.classList.replace("dark", "light");
    toggleBtn.textContent = "🌙";
  }
}