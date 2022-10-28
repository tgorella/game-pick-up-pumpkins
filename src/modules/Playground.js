const scoreTable = document.createElement('div');
scoreTable.id='score';

export function gameScreenHTML() {
const gameScreen = document.createElement('div');
const screenTitle = document.createElement('h1');
screenTitle.textContent = 'Pick Up Pumpkins';
const playgroundContainer = document.createElement('div');
playgroundContainer.className='playground-container';
const fenceSide = document.createElement('div');
fenceSide.className = 'fence-side';
const playgroundMiddleSection = document.createElement('div');
playgroundMiddleSection.id = 'playground';
const fenceTop = document.createElement('div');
fenceTop.className = 'fence';
const playground = document.createElement('div');
playground.className = 'playground';
const fenceBottom = document.createElement('div');
fenceBottom.className = 'fence-bottom';

playgroundMiddleSection.append(fenceTop,playground, fenceBottom);
playgroundContainer.append(fenceSide, playgroundMiddleSection, fenceSide);
gameScreen.append(screenTitle, scoreTable, playgroundContainer);
return gameScreen;
}


