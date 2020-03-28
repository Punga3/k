function loop(){
	window.canvas.width=window.innerWidth;
	window.canvas.height=window.innerHeight;
	window.time+=1;
	window.context.fillStyle="#FFFFFF";
	window.context.fillRect(0,0,window.canvas.width,window.cnv.height);
	
	for(var i=0; i<window.entities.length; i++){
		//Init entity
		var ent = window.entities[i];
		var entImage = window.images[ent.lvl-1];
		ent.w = 3*entImage.width/(ent.lvl);
		ent.h = 3*entImage.height/(ent.lvl);
		ent.draw(window.context);
		ent.doing();

		window.entities[0].colide(window.entities[1]);
		
		//Move player
		if(window.movePlayer){
			playerMove();
		}
	}
}

