function start(){
	//Init
	window.canvas = document.getElementById("cnv");
	window.context = window.canvas.getContext("2d");
	window.canvas.addEventListener("mousemove", saveCursor, false);
	window.canvas.addEventListener("mousedown", enablePlayerMove, false);
	window.canvas.addEventListener("mouseup", disablePlayerMove, false);
	window.canvas.addEventListener("wheel", scrollHandler, false);

	window.entities = [];
	window.player = new Player(1,320,320);
	window.player.x=canvas.width/2;
	window.player.y=canvas.height/2;
	window.selectedItem=0;


	window.imageManager = new ImageManager();

	//Create entitites
	window.entities = [];
	window.entities.push(window.player);

	//Create HUD
	window.score = new Score(0,1);
	window.invHUD = new InvHUD();
	window.entities.push(invHUD);

	//Add entities to field
	for(var i = 1; i<1000; i++){
		var entity = new Monster(getRandomInt(10)+1,10*(2*getRandomInt(window.innerWidth)-window.innerWidth),10*(2*getRandomInt(window.innerHeight)-window.innerHeight));
		entity.dx = 10*(Math.random()*2-1);
		entity.dx = 10*(Math.random()*2-1);
		window.entities.push(entity);
	}
	window.entities.push(new Ball(320,320,32,32));
	window.entities.push(new Ball(320,200,32,32));
	window.entities.push(new Ball(320,100,32,32));


	//Set timer loop
	window.imageManager.loadImages(function(){window.loopId=setInterval(loop,5);});
	window.time=0;
}
window.onload = start;
