
export default function renderPickUpPumpkins() {
const gameContainer = document.createElement('div');
gameContainer.id = 'gameContainer';
const audio = document.createElement('audio');
audio.src = './src/halloween_2018_02 - Halloween Theme.mp3';
audio.autoplay = 'true';
const welcomeSection = document.createElement('section');
welcomeSection.id = 'welcome';
const welcomeImg = document.createElement('img');
welcomeImg.src = './src/welcome-img.webp';
welcomeImg.alt = 'Pick Up Pumpkins';
const welcomeHeader = document.createElement('h1');
welcomeHeader.innerHTML=`Welcome to<br>Pick Up Pumpkins`;
const welcomeInstructions = document.createElement('div');
welcomeInstructions.className = 'instructions';
welcomeInstructions.innerHTML = `
<div class="">Перемещайся по полю, меняя направление движения с помощью стрелок на клавиатуре.</div>
	<div class="">Собери как можно больше тыкв. Только учти, что с каждой подобранной тыквой твоя скорость увеличивается.</div>
	<div class="">Постарайся не врезаться в границы поля - на этом закончится твоя игра.</div>
	<div class="">Игра начнется как только ты нажмешь на любую стрелку на клавиатуре. Но сначала жми кнопку "Играть".</div>
`;
const startButton = document.createElement('button');
startButton.className = 'play-btn';
startButton.id = 'start-play-btn';
startButton.innerText = 'Играть';

const playSection = document.createElement('section');
playSection.id = 'game';

const endGameSection = document.createElement('section');
endGameSection.id = 'game-over';

welcomeSection.append(welcomeImg, welcomeHeader, welcomeInstructions, startButton);
gameContainer.append(audio, welcomeSection, playSection, endGameSection);
document.body.append(gameContainer);
}