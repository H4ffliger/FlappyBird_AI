class Bird{

	constructor(brain){
	this.y = width / 2;
	this.x = 100;
	this.velocity = 0;
	this.size = 32;
	this.score = -190;
	this.fitness = 0;
	

	if(brain){
		this.brain = brain.copy();
	}
	else{
		this.brain = new NeuralNetwork(4,6,8,6,1);
	}
}


	show(){
		stroke(255);
		fill(255, 40);
		ellipse(this.x, this.y, this.size, this.size);
	}

	mutate(mutateRate){
		this.brain.mutate(mutateRate);
	}

	think(pipes){
		var closest = null;
		var closestD = Infinity;
		for(var i = pipes.length -1; i >= 0; i--){
			var d = (pipes[i].x + pipes[i].size)- this.x;
			if(d < closestD && d > 0){
				closest = pipes[i];
				closestD = d;
			}
		}
		var inputs = [];

		inputs[0] = this.y / height;
		inputs[1] = closest.x / width;
		inputs[2] = closest.top / height;
		inputs[3] = this.velocity / 16;

		var output = this.brain.predict(inputs);
		if(output[0] > 0.5){
			this.up();
		}
	}

	gravity(){
		this.y += this.velocity;

		this.velocity += 0.5;

		if(this.velocity > 16){
			this.velocity = 16;
		}

		if(this.y > height - this.size/2){
			this.y = height - this.size/2;
		}

		this.score ++;
	}

	up(){
		this.velocity = -14;
	}
}