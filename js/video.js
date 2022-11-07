var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume*100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate*=.90;
	console.log("Speed is ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate*=1.1;
	console.log("Speed is ", video.playbackRate);
});

document.querySelector("#slider").addEventListener("click", function(){
	video.volume = this.value/100
	console.log("The current value is ", video.volume)
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime += 10
	console.log("Jumped 10 to " + video.currentTime)
	if(video.ended == true){video.currentTime = 0,
	console.log("Jumped past duration restart to " + video.currentTime)}
});

document.querySelector("#mute").addEventListener("click", function(){
	if(video.muted == true){
		video.muted = false
		console.log("volume unmuted set to " + video.volume)
		this.innerHTML = "Mute"}
	else{
		video.muted = true
		console.log("volume muted")
		this.innerHTML = "Unmute";}
});

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool")
	console.log("original styling")
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool")
	console.log("original styling")
})