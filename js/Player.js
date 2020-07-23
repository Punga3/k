class Player extends Monster{
	constructor(lvl,x,y,rotation){
		super(lvl,x,y,rotation);
		this.inventory=[];
	}
	speed(){
		return super.speed()*4;
	}
}
