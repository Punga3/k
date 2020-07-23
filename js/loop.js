function loop(){
	window.canvas.width=window.innerWidth;
	window.canvas.height=window.innerHeight;
	window.time+=1;
	window.context.fillStyle="#FFFFFF";
	window.context.fillRect(0,0,window.canvas.width,window.cnv.height);
	window.run = true;
	for(var i=0; i<window.entities.length&&window.run; i++){
		//Init entity
		var ent = window.entities[i];
		var entImage = ent.getImage();
		ent.w = 3*entImage.width/(ent.lvl);
		ent.h = 3*entImage.height/(ent.lvl);
		ent.draw(window.context);
		ent.doing();
		for(var j=i; j<window.entities.length; j++){
			if(window.entities[j].isColliding(window.entities[i])){
				window.entities[i].collide(window.entities[j]);
				window.entities[j].collide(window.entities[i]);
			}
		}
		
		//Move player
		if(window.movePlayer){
			playerMove();
		}
	}
}

