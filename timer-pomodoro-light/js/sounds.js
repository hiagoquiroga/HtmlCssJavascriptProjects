export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")
  const forestAudio = new Audio('sounds/forest.wav')
  const rainAudio = new Audio('sounds/rain.wav')
  const cafeAudio = new Audio('sounds/cafe.wav')
  const fireplaceAudio = new Audio('sounds/fireplace.wav')
  forestAudio.loop = true
  rainAudio.loop = true
  cafeAudio.loop = true
  fireplaceAudio.loop = true

function pressButton() {
    buttonPressAudio.play()
  }

function endTime() {
  kitchenTimer.play()
}

function bgAudioStart() {
  bgAudio.play()
}

function forestAudioStart() {
  forestAudio.play()
}
function forestAudioPause() {
  forestAudio.pause()
}

function rainAudioStart() {
  rainAudio.play()
}

function rainAudioPause() {
  rainAudio.pause()
}

function cafeAudioStart() {
  cafeAudio.play()
}

function cafeAudioPause() {
  cafeAudio.pause()
}

function fireplaceAudioStart() {
  fireplaceAudio.play()
}

function fireplaceAudioPause() {
  fireplaceAudio.pause()
}

return {
  pressButton,
  endTime,
  bgAudioStart,
  forestAudioStart,
  forestAudioPause,
  rainAudioStart,
  rainAudioPause,
  cafeAudioStart,
  cafeAudioPause,
  fireplaceAudioStart,
  fireplaceAudioPause
}
}