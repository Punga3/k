class Chair extends Item {
	constructor(x,y){
		super(x,y,0,0);
	}
	getName(){
		return "chaiir";
	}
	drawWhere(ctx,x,y){
		this.image=window.imageManager.getImage("chair");
		this.w=this.image.width*1.5;
		this.h=this.image.height*1.5;
		ctx.drawImage(this.image,x,y,this.w,this.h);
	}
	draw(ctx){
		this.drawWhere(ctx,calcDrawX(this.x,this.w),calcDrawY(this.y,this.h));
	}
}
