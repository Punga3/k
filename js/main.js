function start(){
	//Init
	window.canvas = document.getElementById("cnv");
	window.context = window.canvas.getContext("2d");
	window.canvas.addEventListener("click", playerMove, false);
	//window.canvas.ontouchclick=playerMove;

	window.entities = [];
	window.player = new Entity(1,320,320,true);
	window.player.x=canvas.width/2;
	window.player.y=canvas.height/2;
	window.player.dx=10;
	window.player.dy=10;
	window.entities.push(window.player);
	window.images = [];

	//Add entities to field
	for(var i = 1; i<100; i++){
		var entity = new Entity(getRandomInt(10)+1,getRandomInt(window.innerWidth),getRandomInt(window.innerHeight),false,Math.random()*2*Math.PI);
		/*entity.dx = 10*(Math.random()*2-1);
		entity.dx = 10*(Math.random()*2-1);*/
		window.entities.push(entity);
	}

	//Init images
	for(var i = 1; i<11; i++){
		var img = new Image();
		img.src=imgSrcName(i);
		window.images.push(img);
	}

	//Set timer loop
	setInterval(loop,5);
	window.time=0;
}
window.onload = start;
