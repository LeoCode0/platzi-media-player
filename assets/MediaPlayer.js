function MediaPlayer(config){
  this.media = config.el
  this.plugins = config.plugins || []

  this._initPlugins()
}

MediaPlayer.prototype._initPlugins = function(){
  this.plugins.forEach(plugin => {
    plugin.run(this)
  })
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


MediaPlayer.prototype.mute = function(){
  this.media.muted = true
}

MediaPlayer.prototype.unMute = function(){
  this.media.muted = false
}

MediaPlayer.prototype.toggleMute = function(){
  if (this.media.muted){
    this.unMute()
  } else {
    this.mute()
  }
}

export default MediaPlayer