class InvHUD extends Entity{
	constructor(score, lvl){
		super(40,0);
		this.score = score;
		this.lvl = lvl;
	}
	isColliding(arg){
		return false;
	}

	draw(ctx){
		if(window.player.inventory.getSize()>0){
			this.y=window.canvas.height-100;
			ctx.font = "30px Consolas";
			ctx.fillStyle = "black";
			let text = "In hand: \xa0";
			ctx.fillText(text, this.x, this.y+40);
			let textDim = ctx.measureText(text);
			let item=window.player.inventory.currentItem();
			item.drawWhere(ctx,this.x+textDim.width+item.w/2,item.h/2+this.y+15);
			ctx.font = "20px Consolas";
			ctx.fillStyle = "black";
			ctx.fillText(item.getName(), this.x, this.y+15+40+20);
		}
	}
}
