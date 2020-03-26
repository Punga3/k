function start(){
	//Init
	window.canvas = document.getElementById("cnv");
	window.context = window.canvas.getContext("2d");
	window.canvas.onmousemove=leftClick;
	window.canvas.ontouchmove=leftClick;
	window.entities = [];
	window.player = new Entity(1,320,320,true);
	window.entities.push(window.player);
	window.images = [];

	//Add entities to field
	for(var i = 1; i<100; i++){
		var entity = new Entity(getRandomInt(10)+1,getRandomInt(window.innerWidth),getRandomInt(window.innerHeight),false,Math.random()*2*Math.PI);
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