import * as Playground from './src/modules/Playground.js';
import Pumpkin from './src/modules/Pumpkin.js';
import Hero from './src/modules/Hero.js';
import Stones from './src/modules/Stones.js';
import * as Const from './src/modules/Const.js';
import startPlay from './src/modules/utils/startPlay.js';
import stopPlay from './src/modules/utils/StopPlay.js';
import renderPickUpPumpkins from './src/modules/PupModuleHtml.js';

renderPickUpPumpkins();

const startPlayBtn = document.querySelector('#start-play-btn');
startPlayBtn.addEventListener('click', startPlay);
const gameScreenContainer = document.querySelector('#game');
gameScreenContainer.append(Playground.gameScreenHTML());

let score = 0;
let isFinded = false;
renderScore();

function renderScore() {
	const scoreTable = document.querySelector('#score');
	scoreTable.innerText = 'Ваш счет: ' + score;
}

for (let i=1; i < 40; i++) {
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
	setTimeout(stopPlay(score), 4000);
}