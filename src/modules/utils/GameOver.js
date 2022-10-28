export default function gameOver(setDirection, func, score) {
	document.removeEventListener('keyup',setDirection)
	setTimeout(func(score), 4000);
}
