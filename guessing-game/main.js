// variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xTries = 1

// eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterReset)

// funcoes
function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")
    if(Number(inputNumber.value) >= 0 && Number(inputNumber.value) <=10) {
      errou()
    if(Number(inputNumber.value) == randomNumber) {
      toggleScreen()
      screen2.querySelector("h2").innerText = `Acertou em ${xTries} tentativas!`
  }
}
  else if (Number(inputNumber.value) <0 || Number(inputNumber.value) > 10) 
  {alert('Não são permitidos números abaixo de 0 e acima de 10.')}
  inputNumber.value = ""
  xTries++
}

function handleResetClick() { 
  toggleScreen()
  xTries = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function enterReset(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}

function errou() {
  if(Number(inputNumber.value) < randomNumber){
    alert('Mais')
  } else if(Number(inputNumber.value) > randomNumber){
    alert('Menos')
  }
}
