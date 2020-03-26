function playerMove(){
	var mouseX = event.clientX;
	var mouseY = event.clientY;

	var vectorX = mouseX - window.player.x;
	var vectorY = mouseY - window.player.y;

	var unitVectorX = vectorX / Math.sqrt((vectorX*vectorX) + (vectorY*vectorY));
	var unitVectorY = vectorY / Math.sqrt((vectorX*vectorX) + (vectorY*vectorY));

	window.player.dx = unitVectorX;
	window.player.dy = unitVectorY;

	console.log(unitVectorX + " : " + unitVectorY);
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
