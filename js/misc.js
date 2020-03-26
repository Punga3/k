function leftClick(event) {

	var xClick = event.clientX;
	var yClick = event.clientY;
	var yeetSpeed = 1;

	for(var i = 0; i < window.entities.length; i++){
		var ent = window.entities[i];
		if(ent.x >= xClick){
			ent.dx -= yeetSpeed;
		}else {
			ent.dx += yeetSpeed;
		}
		if(ent.y >= yClick){
			ent.dy -= yeetSpeed;
		}else {
			ent.dy += yeetSpeed;
		}
	}
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}