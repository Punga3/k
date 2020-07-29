class Item extends Entity{
	constructor(x,y){
		super(x,y);
		this.inventory=[];
	}
	getName(){
		return "generic item";
	}
	collide(e){
		if(e==window.player){
			window.player.inventory.pickUp(this);
			this.disabled=true;
		}
	}
	drawWhere(ctx,x,y){
	}
}
