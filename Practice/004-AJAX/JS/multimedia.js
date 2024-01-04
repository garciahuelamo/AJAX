let video = document.getElementById("video");

document.getElementById("start").onclick = function(){
    video.play();
}
document.getElementById("pause").onclick = function(){
    video.pause();
}
document.getElementById("rewind").onclick = function(){
    video.currentTime = 0;
}
document.getElementById("forward").onclick = function(){
    video.currentTime += 10;
}
document.getElementById("backward").onclick = function(){
    video.currentTime -= 10;
}
document.getElementById("quiet").onclick = function(){
    video.volume = 0;
}
document.getElementById("volume").onclick = function(){
    video.volume = 1;
}
document.getElementById("controlvolume").onchange = function(){
    video.volume = this.value;
}