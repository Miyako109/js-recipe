const display = document.getElementById("display")
const minusButton = document.getElementById("minus-button")
const extraButton = document.getElementById("extra-button")


let displayNumber = 0


minusButton.onclick = function(){
  const minusNumber = displayNumber-1;
  displayNumber = minusNumber;
  display.textContent = displayNumber
}

extraButton.onclick = function(){
  const extraNumber = displayNumber*2;
  displayNumber = extraNumber;
  display.textContent = displayNumber;
}