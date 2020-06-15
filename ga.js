

function nextGeneration(){

	calculateFitness();

	for(var i = 0; i < TOTAL_POP; i++){
		birds[i] = pickOne();
	}
	savedBirds = [];
	generation ++;
}


function pickOne(){
	var index = 0;
	var r = random(1);
	while (r > 0){ 
		r = r - savedBirds[index].fitness; 
		index ++;
	}

	index --;

	var bird = savedBirds[index];

	var child = new Bird(bird.brain);
	child.mutate(0.1);
	return child;
}

function calculateFitness(){
	var sum = 0;
	for(var i = savedBirds.length -1; i >= 0; i--){
		sum += savedBirds[i].score;
	}

	for(var i = savedBirds.length -1; i >= 0; i--){
		savedBirds[i].fitness = savedBirds[i].score / sum;
	}
	total_fitness = int(sum / 100);
	console.log(total_fitness);
}