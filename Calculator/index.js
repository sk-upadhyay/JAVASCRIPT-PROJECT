const display = document.getElementById("display");
const buttons = document.querySelectorAll(".calculator input[type='button']");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const currentValue = display.value;
    const buttonValue = button.value;

    if (buttonValue === "C") {
      display.value = "";
    } else if (buttonValue === "=") {
      let x = eval(currentValue);
      display.value = x;
    } else {
      display.value += buttonValue;
    }
  });
});
