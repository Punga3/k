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
function scrollHandler(e){
	if(e.deltaY<0){
		window.player.inventory.selectNext();
	}else{
		window.player.inventory.selectPrev();
	}
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

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function calcDrawX(x,w){
	return window.canvas.width/2+x-w/2-window.player.x;
}
function calcDrawY(y,h){
	return window.canvas.height/2+y-h/2-window.player.y;
}
function roundToPrecision(x, precision) {
    var y = +x + (precision === undefined ? 0.5 : precision/2);
    return y - (y % (precision === undefined ? 1 : +precision));
}
