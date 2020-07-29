class Inventory{
	constructor(){
		this.items=[];
		this.selected=0;
	}
	pickUp(item){
		this.items.push(item);
	}
	getSize(){
		return this.items.length;
	}
	selectNext(){
		this.selected++;
		if(this.selected>=this.getSize())
			this.selected=0;
	}
	selectPrev(){
		this.selected--;
		if(this.selected<0)
			this.selected=this.getSize()-1;
	}
	currentItem(){
		return this.getItem(this.selected);
	}
	getIndex(){
		return this.selected;
	}
	getItem(i){
		if(i<this.getSize()){
			return this.items[i];
		}
		return null;
	}
}
