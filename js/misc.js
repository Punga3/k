function playerMove(){
	var mouseX = window.cursorX;
	var mouseY = window.cursorY;

	var vectorX = mouseX - window.canvas.width/2;
	var vectorY = mouseY - window.canvas.height/2;

	var unitVectorX = vectorX / Math.sqrt((vectorX*vectorX) + (vectorY*vectorY));
	var unitVectorY = vectorY / Math.sqrt((vectorX*vectorX) + (vectorY*vectorY));

	window.player.dx = unitVectorX;
	window.player.dy = unitVectorY;
}

function saveCursor(event){
	window.cursorX = event.clientX;
	window.cursorY = event.clientY;
}

function enablePlayerMove(){
	window.movePlayer = true;
}

function disablePlayerMove(){
	window.movePlayer = false;
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function round_to_precision(x, precision) {
    var y = +x + (precision === undefined ? 0.5 : precision/2);
    return y - (y % (precision === undefined ? 1 : +precision));
}