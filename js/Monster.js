class Monster extends Entity{
	constructor(lvl,x,y,player,rotation){
		super(x,y,player,rotation);
		this.lvl=lvl;
		this.inventory=[];
	}
	getImage(){
		return window.kImages[this.lvl-1];
	}
	speed(){
		return this.lvl*0.3;
	}
}
