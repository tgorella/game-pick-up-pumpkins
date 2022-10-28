export default class Pumpkin {
	constructor() {
		this.positionX = Math.floor(Math.random() * 540);
    this.positionY = Math.floor(Math.random() * 1140);
		this.img = document.createElement('div');

	}

	render(x=this.positionX, y=this.positionY) {
		this.img.className = 'pumpkin';
		this.img.style.top = `${this.positionX}px`;
		this.img.style.left = `${this.positionY}px`;
		const playground = document.querySelector('.playground')
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

