import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video")
const button_play = document.querySelector("#button_play")
const button_mute = document.querySelector("#button_mute")
const player = new MediaPlayer({ 
  el: video, 
  plugins: [
  // new AutoPlay()] })
  ]
})

button_play.onclick = () => {
  if (player.isPaused()){
    player.play()
  } else{
    player.pause()
  }
}

button_mute.onclick = () => player.toggleMute()