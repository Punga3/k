function loop(){
	window.canvas.width=window.innerWidth;
	window.canvas.height=window.innerHeight;
	window.time+=1;
	window.context.fillStyle="#FFFFFF";
	window.context.fillRect(0,0,window.canvas.width,window.cnv.height);
	
	for(var i=0; i<window.entities.length; i++){
		var ent = window.entities[i];
		var entImage = window.images[ent.lvl-1];
		var entWidth = 3*entImage.width/(ent.lvl);
		var entHeight = 3*entImage.height/(ent.lvl);
		ent.draw(entWidth,entHeight,window.context);
		ent.doing();
	}
}

