/**
 * Selects the card text element.
 * @type {HTMLElement}
 */
const cardText = document.querySelector("[data-card-text]");

/**
 * Selects the subtract button element.
 * @type {HTMLElement}
 */
const buttonSubtract = document.querySelector("[data-button-subtract]");

/**
 * Selects the reset button element.
 * @type {HTMLElement}
 */
const buttonReset = document.querySelector("[data-button-reset]");

/**
 * Selects the add button element.
 * @type {HTMLElement}
 */
const buttonAdd = document.querySelector("[data-button-add]");

cardText.textContent = 0;

/**
 * Subtracts 1 from the current number displayed in the card text element.
 */
const subtractFromNumber = () => {
    cardText.textContent = Number(cardText.textContent) - 1;
};

/**
 * Resets the number displayed in the card text element to 0.
 */
const resetNumber = () => {
    cardText.textContent = 0;
};

/**
 * Adds 1 to the current number displayed in the card text element.
 */
const addToNumber = () => {
    cardText.textContent = Number(cardText.textContent) + 1;
};

buttonSubtract.addEventListener("click", subtractFromNumber);
buttonReset.addEventListener("click", resetNumber);
buttonAdd.addEventListener("click", addToNumber);
