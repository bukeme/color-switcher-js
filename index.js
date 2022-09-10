const colorEl = document.querySelector('#color')
const switchEl = document.querySelector('#switch')

switchEl.addEventListener('click', function() {
	let red = getRandomNumber()
	let green = getRandomNumber()
	let blue = getRandomNumber()

	const bgColor = `rgb(${red}, ${green}, ${blue})`
	color.textContent = bgColor
	document.body.style.backgroundColor = bgColor
})

function getRandomNumber() {
	return Math.floor(Math.random() * 256)
}