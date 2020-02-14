function MediaPlayer(config){
  this.media = config.el
}

MediaPlayer.prototype.play = function(){
  this.media.play()
}

MediaPlayer.prototype.isPaused = function(){
  return this.media.paused
}

MediaPlayer.prototype.pause = function(){
  this.media.pause()
}


export default MediaPlayer