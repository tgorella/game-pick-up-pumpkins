export default class Hero {
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
		const playground = document.querySelector('.playground')
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