

function Pipe(){
	this.top = random(height / 2);
	this.gap = 300;
	this.size = 100;
	this.bottom = this.top + this.gap;
	this.x = width + 100;



	this.update = function(){
		this.x -= 4;
	}


	this.show = function(){
		fill(255);
		rect(this.x, 0, this.size, this.top);
		rect(this.x, this.top + this.gap, this.size, height);
	}


	this.hits = function(bird){
		if(bird.x > this.x && bird.x < this.x + this.size){
			if(bird.y < this.top || bird.y > this.top + this.gap){
				return true;
			}
		}
		return false;
	}

}