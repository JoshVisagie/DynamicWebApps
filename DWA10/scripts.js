const cardText = document.querySelector("[data-card-text]")
const buttonSubtract = document.querySelector("[data-button-subtract]")
const buttonReset = document.querySelector("[data-button-reset]")
const buttonAdd = document.querySelector("[data-button-add]")

cardText.textContent=0;

const subtractFromNumber = () => {
    cardText.textContent =Number(cardText.textContent)-1
}

const resetNumber = () => {
    cardText.textContent =0;
}

const addToNumber = () => {
    cardText.textContent =Number(cardText.textContent)+1
}

buttonSubtract.addEventListener("click", subtractFromNumber)
buttonReset.addEventListener("click", resetNumber)
buttonAdd.addEventListener("click", addToNumber)