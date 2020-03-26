<<<<<<< HEAD
=======

function drawEntity(ent,entw,enth,ctx){
	ctx.translate(ent.x+entw/2,ent.y+enth/2);
	ctx.rotate(-ent.rotation);
	ctx.drawImage(window.images[ent.lvl-1],-entw/2,-entw/2,entw,enth);
	ctx.rotate(ent.rotation);
	ctx.translate(-ent.x-enth/2, -ent.y-enth/2);
}
>>>>>>> cd9e725833f7bbd3b9c7d518d5bfa84b667a2845

//Load src from file
function imgSrcName(lvl){
	return "levels/lvl"+lvl+".png";
}

