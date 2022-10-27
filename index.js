const playground = document.createElement('div');
playground.className = 'playground';
const fenceBottom = document.createElement('div');
fenceBottom.className = 'fence-bottom';
const playgroundContainer = document.querySelector('#playground');
playgroundContainer.append(playground, fenceBottom);
let score = 0;
let isFinded = false;
const scoreTable = document.createElement('div');
const scoreContainer = document.querySelector("#score");
scoreContainer.append(scoreTable);


function renderScore() {
scoreTable.innerText = 'Ваш счет: ' + score;
}

renderScore();

class Pumpkin {
	constructor() {
		this.positionX = Math.floor(Math.random() * 540);
    this.positionY = Math.floor(Math.random() * 1140);
		this.img = document.createElement('div');

	}

	render(x=this.positionX, y=this.positionY) {
		this.img.className = 'pumpkin';
		this.img.style.top = `${this.positionX}px`;
		this.img.style.left = `${this.positionY}px`;
		playground.append(this.img);
	}

	currentPositionX() {
		return this.positionX;
	}
	
	currentPositionY() {
		return this.positionY;
	}

	remove() {
		this.img.remove();
	}
}


class Hero {
	constructor() {
		this.direction = '';
		this.speed = 200;
		this.img = document.createElement('div');
		this.ghost = document.createElement('img');
		this.ghost.src = './src/ghost-right.webp';
		this.ghost.className='ghost-image';
		const shadow = document.createElement('div');
		shadow.className = 'ghost-shadow';
		this.img.append(this.ghost, shadow);
		this.isDead = false;
		this.positionX = 30;
		this.positionY = 10;
		this.currentDirection;
	}

	
	render(x=this.positionX, y=this.positionY) {
		this.img.className = 'ghost';
		this.img.style.top = `${this.positionX}px`;
		this.img.style.left = `${this.positionY}px`;
		playground.append(this.img);
}

	checkDirection(direction) {
		this.direction = direction;
		if (this.direction === 'right') {
		this.ghost.src = './src/ghost-right.webp';
			clearInterval(this.currentDirection);
			this.currentDirection = setInterval(() => {this.move(0,10)}, this.speed);
		}
		if (this.direction === 'left') {
			clearInterval(this.currentDirection);
			this.ghost.src = './src/ghost-left.webp';
			this.currentDirection = setInterval(() => {this.move(0,-10)}, this.speed);
		}
		if (this.direction === 'down') {
			clearInterval(this.currentDirection);
			this.currentDirection = setInterval(() => {this.move(10,0)}, this.speed);
		}
		if (this.direction === 'up') {
			clearInterval(this.currentDirection);
			this.currentDirection = setInterval(() => {this.move(-10,0)}, this.speed);
		}
		
	}
	move(x, y) {
	this.positionX += x;
	this.positionY += y;
	this.render()
	}

	currentPositionX() {
		return this.positionX;
	}

	currentPositionY() {
		return this.positionY;
	}
	increaseSpeed() {
		this.speed = this.speed * 0.9;
	}

	currentSpeed() {
		return this.currentSpeed;
	}

	dead() {
		clearInterval(this.currentDirection);
		this.ghost.src = './src/dead.webp';
		this.img.classList.add('dead');
	}

}

class Stones {
	constructor() {
		this.positionX = Math.floor(Math.random() * 540);
    this.positionY = Math.floor(Math.random() * 1080);
		this.stone = document.createElement('div');

	}

	render(x=this.positionX, y=this.positionY) {
		const num = Math.floor(Math.random() * 5);
		this.stone.className = 'stone';
		this.stone.style.backgroundImage = `url('./src/stone${num}.webp')`;
		this.stone.style.top = `${this.positionX}px`;
		this.stone.style.left = `${this.positionY}px`;
		playground.append(this.stone);
	}
}

for (i=1; i < 40; i++) {
const stone = new Stones;
stone.render();
}

const ghost = new Hero;
ghost.render();

let pumpkin = new Pumpkin;
pumpkin.render();

let searchPumpkin = setInterval(findPumpkin, ghost.currentSpeed);

document.addEventListener('keyup',setDirection)

function setDirection(event) {
	if (event.key === 'ArrowRight') {
		event.preventDefault();
		ghost.checkDirection('right');
	}
	if (event.key === 'ArrowDown') {
		event.preventDefault();
		ghost.checkDirection('down');
	}
	if (event.key === 'ArrowUp') {
		event.preventDefault();
		ghost.checkDirection('up');
	}
	if (event.key === 'ArrowLeft') {
		event.preventDefault();
		ghost.checkDirection('left');
	}
}


function findPumpkin() {
	if ((ghost.currentPositionX() >= (pumpkin.currentPositionX()-60) && ghost.currentPositionX() <= (pumpkin.currentPositionX()+60)) && (ghost.currentPositionY() >= (pumpkin.currentPositionY()-60) && ghost.currentPositionY() <= (pumpkin.currentPositionY()+60)) ) {
		pumpkin.remove();
		score += 10;
		isFinded = true;
		ghost.increaseSpeed();
		stopSearching();
		renderScore();
	}
	if (ghost.currentPositionX() < -60 || ghost.currentPositionY() < 0 || ghost.currentPositionX() > 510 || ghost.currentPositionY() > 1160) {
		ghost.dead();
		gameOver();
		clearInterval(searchPumpkin);
		}
}

function stopSearching() {
	if (isFinded) {
		clearInterval(searchPumpkin);
		setTimeout( () => {
			searchPumpkin = setInterval(findPumpkin, 100);
		}, (ghost.currentSpeed*4));
		pumpkin = new Pumpkin;
		pumpkin.render();
	}

}

function gameOver() {
	document.removeEventListener('keyup',setDirection)
	console.log('game over');
}