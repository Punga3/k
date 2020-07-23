function start(){
	//Init
	window.canvas = document.getElementById("cnv");
	window.context = window.canvas.getContext("2d");
	window.canvas.addEventListener("mousemove", saveCursor, false);
	window.canvas.addEventListener("mousedown", enablePlayerMove, false);
	window.canvas.addEventListener("mouseup", disablePlayerMove, false);

	window.entities = [];
	window.player = new Player(1,320,320,0);
	window.player.x=canvas.width/2;
	window.player.y=canvas.height/2;

	//Create entitites
	window.entities = [];
	window.entities.push(window.player);
	window.kImages = [];

	//Create score HUD
	window.score = new Score(0,1);

	//Add entities to field
	for(var i = 1; i<1000; i++){
		var entity = new Monster(getRandomInt(10)+1,10*(2*getRandomInt(window.innerWidth)-window.innerWidth),10*(2*getRandomInt(window.innerHeight)-window.innerHeight),false,Math.random()*2*Math.PI);
		entity.dx = 10*(Math.random()*2-1);
		entity.dx = 10*(Math.random()*2-1);
		window.entities.push(entity);
	}

	//Init images
	for(var i = 1; i<11; i++){
		var img = new Image();
		img.src=imgSrcName(i);
		window.kImages.push(img);
	}

	//Set timer loop
	setInterval(loop,5);
	window.time=0;
}
window.onload = start;
