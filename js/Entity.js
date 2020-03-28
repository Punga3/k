class Entity{
	constructor(lvl,x,y,player,rotation){
		this.lvl=lvl;
		this.x=x;
		this.y=y;
		this.w=0;
		this.h=0;
		this.dx=0;
		this.dy=0;
		this.player=player;
		/*this.rotation=rotation;
		this.drotation=0
		this.scale=1;
		this.dscale=0;*/
	}
	colide(e){
		if((this.y - (this.h/2)) < (e.y + (e.h/2)) && (this.y + (this.h/2)) > (e.y - (e.h/2))) {
			if((this.x - (this.w/2)) < (e.x + (e.w/2)) && (this.x + (this.w/2)) > (e.x - (e.w/2))) {
				return true;
			}
		}
		return false;
	}
	speed(){
		return this.lvl*0.3*(this==window.player?4:1);
	}

	draw(ctx){
		ctx.drawImage(window.images[this.lvl-1],
			window.canvas.width/2+this.x-this.w/2-window.player.x,
			window.canvas.height/2+this.y-this.h/2-window.player.y
			,this.w,this.h);
	}

	doing(){
		this.x+=this.dx*this.speed();
		this.y+=this.dy*this.speed();
		this.dx*=0.99;
		this.dy*=0.99;
	}
}
