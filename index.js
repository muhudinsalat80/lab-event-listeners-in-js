
function changeBackgroundColor() {
 var red = Math.floor(Math.random() * 256)
  var green = Math.floor(Math.random() * 256)
  var blue = Math.floor(Math.random() * 256)


  document.body.style.backgroundColor =
    'rgb(' + red + ', ' + green + ', ' + blue + ')'
}


function resetBackgroundColor() {
  document.body.style.backgroundColor = ''
}


function displayKeyPress(event) {
  var display = document.getElementById('keyPressDisplay')
  display.textContent = 'Key pressed: ' + event.key
}

function displayUserInput() {
  var input = document.getElementById('textInput').value
  var display = document.getElementById('textInputDisplay')

  display.textContent = 'You typed: ' + input
}


function setupEventListeners() {
  var changeButton = document.getElementById('changeColorButton')
  var resetButton = document.getElementById('resetColorButton')
  var textInput = document.getElementById('textInput')

  changeButton.addEventListener('click', changeBackgroundColor)
  resetButton.addEventListener('dblclick', resetBackgroundColor)

  document.addEventListener('keydown', displayKeyPress)
  textInput.addEventListener('input', displayUserInput)
}

document.addEventListener('DOMContentLoaded', setupEventListeners)



module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}