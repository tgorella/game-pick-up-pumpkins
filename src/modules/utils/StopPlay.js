import * as Const from '../../modules/Const.js'

export default function stopPlay(score) {
	const slide3 = document.querySelector('#game-over');
	const header = document.createElement('h2');
	header.innerText = 'GAME OVER';
	header.className = 'red';
	slide3.style.top = '0px';
	const totalScore = document.createElement('h3');
	totalScore.innerText = 'Ваш счет: ' + score;
	const replayButton = document.createElement('button');
	replayButton.className="play-btn";
	replayButton.innerText = 'Начать сначала';
	const quitButton = document.createElement('button');
	quitButton.innerText = 'Выйти из игры';
	quitButton.className = 'play-btn';
	slide3.append(header, totalScore, replayButton, quitButton);
	replayButton.addEventListener('click', (event) => {
		window.location.reload()
	})
	quitButton.addEventListener('click', (event) => {
		const gameContainer = document.querySelector('#gameContainer');
		gameContainer.remove();
	})

	
}