function start(){
	window.cnv = document.getElementById("cnv");
	window.ctx = window.cnv.getContext("2d");
	window.cnv.onmousemove=leftClick;
	window.cnv.ontouchmove=leftClick;

	window.entities = [];
	window.player = new Entity(1,320,320,true);
	window.entities.push(window.player);
	window.images = [];
	for(var i = 1; i<100; i++){
		var ent = new Entity(getRandomInt(10)+1,getRandomInt(window.innerWidth),getRandomInt(window.innerHeight),false,Math.random()*2*Math.PI);
		window.entities.push(ent);
	}
	for(var i = 1; i<11; i++){
		var img = new Image();
		img.src=imgSrcName(i);
		window.images.push(img);
	}
	setInterval(loop,5);
	window.time=0;
}
window.onload = start;

