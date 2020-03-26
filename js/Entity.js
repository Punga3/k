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
	draw(w,h,ctx){
		ctx.translate(this.x+w/2,this.y+h/2);
		ctx.rotate(-this.rotation);
		ctx.drawImage(window.images[this.lvl-1],-w/2,-w/2,w,h);
		ctx.rotate(this.rotation);
		ctx.translate(-this.x-h/2, -this.y-h/2);
	}
}
