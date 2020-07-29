class Player extends Monster{
	constructor(lvl,x,y){
		super(lvl,x,y);
	}
	speed(){
		return super.speed()*4;
	}
}
