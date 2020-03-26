function playerMove(){
	var mouseX = event.clientX;
	var mouseY = event.clientY;

	var vectorX = mouseX - window.canvas.width/2;
	var vectorY = mouseY - window.canvas.height/2;

	var unitVectorX = vectorX / Math.sqrt((vectorX*vectorX) + (vectorY*vectorY));
	var unitVectorY = vectorY / Math.sqrt((vectorX*vectorX) + (vectorY*vectorY));

	window.player.dx = unitVectorX;
	window.player.dy = unitVectorY;

	console.log(unitVectorX + " : " + unitVectorY);
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
