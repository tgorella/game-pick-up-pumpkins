export default class Stones {
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
		const playground = document.querySelector('.playground')
		playground.append(this.stone);
	}
}