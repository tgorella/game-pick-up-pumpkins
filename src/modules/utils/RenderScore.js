export default function renderScore(id, score) {
	const scoreTable = document.querySelector(id);
	scoreTable.innerText = 'Ваш счет: ' + score;
}
