const TOTAL_POP = 350;
var birds = [];
var savedBirds = [];
var pipeCountDownMax = 100;
var pipeCountDown = 0;
var pipes = [];
var score = 0;
var generation = 0;
var total_fitness = 0;
var slider;

function setup (){
	createCanvas(800, windowHeight);
	slider = createSlider(1, 500, 1);
	for(var i = 0; i < TOTAL_POP; i++){
		birds[i] = new Bird();
	}

}



function draw(){


	for(var c = 0; c < slider.value(); c ++){
	if(pipeCountDown <1){
		pipes.push(new Pipe());
		pipeCountDown = pipeCountDownMax;
	}
	pipeCountDown -=1;

	for(var i = pipes.length -1; i >= 0; i--){
		pipes[i].update();
		if(pipes[i].x < -100){
			score +=1;
			pipes.splice(i, 1);
		}

		for(var j = birds.length -1; j >= 0; j--){
			if(pipes[i].hits(birds[j])){
				savedBirds.push(birds.splice(j, 1)[0]);
			}
		}
	}
	for(var i = birds.length -1; i >= 0; i--){
	birds[i].think(pipes);
	birds[i].gravity();
	}


	if(birds.length == 0){
		pipes = [];
		pipes.push(new Pipe());
		pipeCountDown = pipeCountDownMax;
		score = 0;
		nextGeneration();
		break;
	}
	}

	//Drawing
	background(51);
	for(var i = pipes.length -1; i >= 0; i--){
		pipes[i].show();
	}
	for(var i = birds.length -1; i >= 0; i--){
		birds[i].show();
	}


	textSize(25);
	text("Score: " + score, 100, 20);
	text("Generation: " + generation, 100, 60);	
	text("Fitness: " + total_fitness, 100, 100);
	text("Speed: " + int(slider.value()), 100, 140);	


}
