class Entity{
	constructor(lvl,x,y,player,rotation){
		this.lvl=lvl;
		this.x=x;
		this.y=y;
		this.dx=0;
		this.dy=0;
		this.player=player;
		this.rotation=rotation;
		this.drotation=0
		this.scale=1;
		this.dscale=0;
	}
}

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

function drawEntity(ent,entw,enth,ctx){
	ctx.translate(ent.x+entw/2,ent.y+enth/2);
	ctx.rotate(-ent.rotation);
	ctx.drawImage(window.images[ent.lvl-1],-entw/2,-entw/2,entw,enth);
	ctx.rotate(ent.rotation);
	ctx.translate(-ent.x-enth/2, -ent.y-enth/2);
}

function imgSrcName(lvl){
	return "levels/lvl"+lvl+".png";
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
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
function loop(){
	window.cnv.width=window.innerWidth;
	window.cnv.height=window.innerHeight;
	window.time+=1;
	window.ctx.fillStyle="#FFFFFF";
	window.ctx.fillRect(0,0,window.cnv.width,window.cnv.height);
	for(var i=0; i<window.entities.length; i++){
		var ent = window.entities[i];
		var enti = window.images[ent.lvl-1];
		var entw = 3*enti.width/(ent.lvl*ent.scale);
		var enth = 3*enti.height/(ent.lvl*ent.scale);
		drawEntity(ent,entw,enth,window.ctx);

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
			if(ent.x+entw>window.cnv.width){
				ent.x=window.cnv.width-entw;
				ent.dx=-Math.round(ent.dx/1.5);
				ent.drotation*=-0.8;
			}
			if(ent.x<0){
				ent.x=0;
				ent.dx=-Math.round(ent.dx/1.5);
				ent.drotation*=-0.8;
			}
			if(ent.y+enth>window.cnv.height){
				ent.y=window.cnv.height-enth;
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
