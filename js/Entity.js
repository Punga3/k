class Entity{
	constructor(x,y,w,h){
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.dx=0;
		this.dy=0;
		this.disabled=false;
	}
	isColliding(e){
		if((this.y - (this.h/2)) < (e.y + (e.h/2)) && (this.y + (this.h/2)) > (e.y - (e.h/2))) {
			if((this.x - (this.w/2)) < (e.x + (e.w/2)) && (this.x + (this.w/2)) > (e.x - (e.w/2))) {
				return true;
			}
		}
		return false;
	}

	draw(ctx){
	}
	collide(e){
	}
	doing(){
	}
}
