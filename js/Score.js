class Score{
	constructor(score, lvl){
		this.score = score;
		this.lvl = lvl;
	}

	draw(ctx){
		ctx.font = "40px Consolas";
		ctx.fillStyle = "black";
		ctx.fillText("Score: " + this.score, 10, 40);

		ctx.font = "30px Consolas";
		ctx.fillStyle = "black";
		ctx.fillText("Lvl: " + this.lvl, 10, 80);
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