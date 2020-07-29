class ImageManager{
	constructor(){
		this.imgs={};
		this.loadImgs=["chair","car","big_car","boomerang"];
		for(var i=0;i<Monster.MAXLVL;i++)
			this.loadImgs.push("lvl"+(i+1))
	}
	toPath(str){
		return "imgs/"+str+".png";
	}
	loadImages(callback){
		this.loadImages__(callback,0);
	}
	loadImages__(callback,i){
		if(i<this.loadImgs.length){
			let im = new Image();
			im.onload=function(){window.imageManager.loadImages__(callback,i+1)};
			im.src=this.toPath(this.loadImgs[i]);
			this.imgs[this.loadImgs[i]]=im;
		}else{
			callback();
		}
	}
	getImage(src){
		return this.imgs[src];
	}
}
