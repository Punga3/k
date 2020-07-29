class Score extends Entity{
	constructor(score, lvl){
		super(10,40);
		this.score = score;
		this.lvl = lvl;
		this.bigFontSize = 40;
		this.smallFontSize = 30;
	}

	draw(ctx){
		ctx.font = this.bigFontSize+"px Consolas";
		ctx.fillStyle = "black";
		ctx.fillText("Score: " + this.score, this.x, this.y);

		ctx.font = this.smallFontSize+"px Consolas";
		ctx.fillStyle = "black";
		ctx.fillText("Lvl: " + this.lvl, this.x, this.y+this.smallFontSize);
	}

	calculateLevel(entity){
		this.score += entity.lvl*10;

		if(this.score == 100){
			this.lvl++;
		} else if(this.score == 300){
			this.lvl++;
		}
	}
}
