class Item extends Entity{
	constructor(lvl,x,y,player,rotation){
		super(lvl,x,y,player,rotation);
		this.inventory=[];
	}
	getName(){
		return "generic item";
	}
	collide(e){
		if(e==window.player)
			window.player.inventory.push(this);
	}
}
