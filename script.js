const addButton = document.getElementById('add-button')
addButton.addEventListener('click', addNumber)

let registeredNumbers = 0
let greatestValue = 0
let lowestValue = 0
let sum = 0
let numbersList = []

function addNumber () {
	let number = Number(document.getElementById('number').value)

	if (number == null || number < 1 || number > 100 || numbersList.includes(number)) {
		alert('Invalid value or already found in the list.')
	} else {
		let createOption = document.createElement('option')
		createOption.text = `Value ${number} added.`
		select.appendChild(createOption)
		
		registeredNumbers++

		if (number > greatestValue) {
			greatestValue = number
		}

		if (registeredNumbers == 1) {
			lowestValue = number
		} else if (number < lowestValue) {
			lowestValue = number
		}

		sum += number

		numbersList.push(number)

		document.getElementById('number').value = ''
		document.getElementById('number').focus()

		result.innerHTML = ''
	}
}

let resultArea = document.getElementById('result')

const finishButton = document.getElementById('finish-button')
finishButton.addEventListener('click', showResult)

function showResult () {
	if (numbersList.length == 0) {
		alert('Add value before finalizing.')
	} else {
		resultArea.innerHTML = ""
		resultArea.innerHTML += `In all, we have ${registeredNumbers} numbers registered.<br>`
		resultArea.innerHTML += `The highest value reported was ${greatestValue}.<br>`
		resultArea.innerHTML += `The lowest value reported was ${lowestValue}.<br>`
		resultArea.innerHTML += `Adding all the values together, we have ${sum}.<br>`
		resultArea.innerHTML += `The average of the entered values is ${(sum / registeredNumbers).toFixed(2)}.`
	}
}

