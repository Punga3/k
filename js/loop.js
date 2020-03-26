function loop(){
	window.canvas.width=window.innerWidth;
	window.canvas.height=window.innerHeight;
	window.time+=1;
	window.context.fillStyle="#FFFFFF";
	window.context.fillRect(0,0,window.canvas.width,window.cnv.height);
	for(var i=0; i<window.entities.length; i++){
		var ent = window.entities[i];
		var enti = window.images[ent.lvl-1];
		var entw = 3*enti.width/(ent.lvl*ent.scale);
		var enth = 3*enti.height/(ent.lvl*ent.scale);
		ent.draw(entw,enth,window.context);

		//Bullshit
		if(window.time%5==0){
			ent.x+=ent.dx;
			ent.y+=ent.dy;
			ent.rotation+=ent.drotation * Math.PI / 180;
			ent.scale*=(100+ent.dscale)/100;
			if(ent.scale>2){
				ent.scale=2
				ent.dscale*=-0.8;
			}else if(ent.scale<1/2){
				ent.scale=1/2
				ent.dscale*=-0.8;
			}
			if(ent.x+entw>window.canvas.width){
				ent.x=window.canvas.width-entw;
				ent.dx=-Math.round(ent.dx/1.5);
				ent.drotation*=-0.8;
			}
			if(ent.x<0){
				ent.x=0;
				ent.dx=-Math.round(ent.dx/1.5);
				ent.drotation*=-0.8;
			}
			if(ent.y+enth>window.canvas.height){
				ent.y=window.canvas.height-enth;
				ent.dy=-Math.round(ent.dy/1.5);
				ent.drotation*=-0.8;
			}
			if(ent.y<0){
				ent.y=0;
				ent.dy=-Math.round(ent.dy/1.5);
				ent.drotation*=-0.8;
			}
			if(window.time%50==0){
				if(!ent.player){
					ent.drotation+=(-2+getRandomInt(3));
					ent.dscale+=(-2+getRandomInt(3));
					ent.dx+=(-1+getRandomInt(3));
					ent.dy+=(-1+getRandomInt(3));
				}
			}
		}
	}
}

