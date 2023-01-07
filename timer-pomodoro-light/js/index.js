import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  buttonMinus,
  buttonPlay,
  buttonPlus,
  buttonForest,
  buttonRain,
  buttonStop,
  buttonCafe,
  buttonMute,
  buttonFireplace,
  minutesDisplay,
  secondsDisplay} from "./elements.js"

const controls = Controls({
  buttonPlay,
  buttonStop,
  buttonMinus,
  buttonPlus,
  buttonForest,
  buttonRain,
  buttonCafe,
  buttonMute,
  buttonFireplace
})

const timer = Timer({
  minutesDisplay, secondsDisplay, resetControls: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})