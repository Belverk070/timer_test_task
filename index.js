const inputEl = document.querySelector("input")
const buttonEl = document.querySelector("button")
const timerEl = document.querySelector("span")

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

const createTimerAnimator = () => {
	return (seconds) => {
		let time = seconds
		let timerInterval = setInterval(function () {
			if (time <= 0) {
				alert("Time is over")
				clearInterval(timerInterval)
			} else {
				let hours = Math.floor((time / 3600) % 60)
				hours = hours < 10 ? "0" + hours : hours
				let minutes = Math.floor(time / 60) % 60
				minutes = minutes < 10 ? "0" + minutes : minutes
				seconds = Math.floor(time % 60)
				seconds = seconds < 10 ? "0" + seconds : seconds

				let pageTimer = `${hours}:${minutes}:${seconds}`
				timerEl.innerText = pageTimer
			}
			--time
		}, 1000)
	}
}

const animateTimer = createTimerAnimator()

inputEl.addEventListener("input", () => {
	// Очистите input так, чтобы в значении
	// оставались только числа
	const value = inputEl.value
	inputEl.value = value.replace(/\D/g, "")
})

buttonEl.addEventListener("click", () => {
	let seconds = Number(inputEl.value)

	animateTimer(seconds)

	inputEl.value = ""
})
