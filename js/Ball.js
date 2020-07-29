class Ball extends Item {
	constructor(x,y,w,h){
		super(x,y);
		this.w=w;
		this.h=h;
		this.color=getRandomColor();
	}
	getName(){
		return "balll "+this.color;
	}
	drawWhere(ctx,x,y){
		ctx.fillStyle=this.color;
		ctx.fillRect(x-this.w/2,y-this.h/2,this.w,this.h);
	}
	draw(ctx){
		this.drawWhere(ctx,calcDrawX(this.x,this.w),calcDrawY(this.y,this.h));
	}
}
