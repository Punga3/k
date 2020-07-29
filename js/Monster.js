class Monster extends Entity{
	static get MAXLVL(){
		return 10;
	}
	static getByLvl(lvl){
		return window.imageManager.getImage("lvl"+lvl);
	}
	constructor(lvl,x,y){
		super(x,y,0,0);
		this.lvl=lvl;
		this.inventory=new Inventory();
	}
	getImage(){
		return Monster.getByLvl(this.lvl);
	}
	speed(){
		return this.lvl*0.3;
	}
	draw(ctx){
		this.w=this.getImage().width;
		this.h=this.getImage().height;
		ctx.drawImage(this.getImage(),
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
