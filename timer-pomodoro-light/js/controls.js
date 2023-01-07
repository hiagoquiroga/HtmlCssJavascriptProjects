import {
  buttonMinus,
  buttonMute,
  buttonPlay,
  buttonPlus,
  buttonForest,
  buttonRain,
  buttonStop,
  buttonCafe,
  buttonFireplace,
  minutesDisplay,
  secondsDisplay} from "./elements.js";

  import Sounds from "./sounds.js";
  
  import Timer from "./timer.js"
  
  export default function Controls ({
    buttonPlay,
    buttonStop,
    buttonMinus,
    buttonPlus,
    buttonMute,
    buttonForest,
    buttonRain,
    buttonCafe,
    buttonFireplace,
  }) {
  
  function play () {
    buttonPlay.classList.add('hide')
 }

  function stop() {
    buttonPlay.classList.remove('hide')
  }

  function forest() {
    buttonForest.classList.add('clickon')
    buttonCafe.classList.remove('clickon')
    buttonFireplace.classList.remove('clickon')
    buttonRain.classList.remove('clickon')
    buttonMute.classList.remove('clickon')
  }

  function rain() {
    buttonRain.classList.add('clickon')
    buttonCafe.classList.remove('clickon')
    buttonFireplace.classList.remove('clickon')
    buttonForest.classList.remove('clickon')
    buttonMute.classList.remove('clickon')
  }

  function cafe() {
    buttonCafe.classList.add('clickon')
    buttonForest.classList.remove('clickon')
    buttonFireplace.classList.remove('clickon')
    buttonRain.classList.remove('clickon')
    buttonMute.classList.remove('clickon')
  }

  function fireplace() {
    buttonForest.classList.remove('clickon')
    buttonCafe.classList.remove('clickon')
    buttonFireplace.classList.add('clickon')
    buttonRain.classList.remove('clickon')
    buttonMute.classList.remove('clickon')
  }

  function mute() {
    buttonMute.classList.add('clickon')
    buttonForest.classList.remove('clickon')
    buttonCafe.classList.remove('clickon')
    buttonFireplace.classList.remove('clickon')
    buttonRain.classList.remove('clickon')
  }
  
  function reset() {
    buttonPlay.classList.remove('hide')
  }

  function dontPlay() {
    buttonPlay.classList.add('hide')
  }

  function plus() {
    let sum = Number(minutesDisplay.textContent)+5
    return sum
  }

function minus() {
  let sub = Number(minutesDisplay.textContent)-5
  let nothing = Number(minutesDisplay.textContent) == 0


  if (Number(minutesDisplay.textContent) >= 5) {
    return sub
  }
  else {
   return nothing = 0
  }
}

return {
  play,
  stop,
  plus,
  minus,
  forest,
  cafe,
  fireplace,
  rain,
  mute,
  reset,
  dontPlay
}

  }
