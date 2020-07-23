class Ball extends Item {
	getNazev(){
		return "balll";
	}
	draw(ctx){
		ctx.fillStyle="#00FF00"
		ctx.fillRect(
			window.canvas.width/2+this.x-this.w/2-window.player.x,
			window.canvas.height/2+this.y-this.h/2-window.player.y
			,this.w,this.h);
	}
}
