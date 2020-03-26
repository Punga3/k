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
	function drawEntity(self,ctx){
		ctx.translate(self.x+self.w/2,self.y+self.h/2);
		ctx.rotate(-self.rotation);
		ctx.drawImage(window.images[self.lvl-1],-self.w/2,-self.w/2,self.w,self.h);
		ctx.rotate(self.rotation);
		ctx.translate(-self.x-self.h/2, -self.y-self.h/2);
	}
}
