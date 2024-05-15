// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
/**
 * set the text content of the div
 * @param {*} textContent
 */
const setText = (textContent) => {
  result.innerText = textContent;
};

/**
 *this function looks to see if there are values in the two forms 'dividend' and 'divider'
 * @param {int} dividendValue
 * @param {int} dividerValue
 * @returns false || true
 */
const checkNotEmpty = (dividendValue, dividerValue) => {
  if (!dividendValue && !dividerValue) {
    return false;
  } else {
    return true;
  }
};
/**
 * this function checks if the values divided are valid by seeing if they are lower than 0,
 * if not it throws the error to the consolelog
 * @param {*} dividendValue
 * @param {*} dividerValue
 * @returns true || false
 */
const checkValidDivision = (dividendValue, dividerValue) => {
  try {
    if (dividendValue < 0 || dividerValue < 0) {
      throw new Error(
        "Division not performed. Invalid number provided. Try again"
      );
    } else {
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
/**
 * this functions checks if it is a number or not
 * @param {*} dividendValue
 * @param {*} dividerValue
 * @returns
 */
const checkIfNumber = (dividendValue, dividerValue) => {
  const dividendAsNumber = Number(dividendValue);
  const dividerAsNumber = Number(dividerValue);

  console.log(dividendAsNumber, dividerAsNumber);
  if (isNaN(dividendAsNumber) || isNaN(dividerAsNumber)) {
    console.log(dividendAsNumber);
    document.body.innerText =
      "Something critical went wrong. Please reload the page";
    throw new Error("something critical went wrong");
  } else {
    return true;
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (!checkNotEmpty(dividend, divider)) {
    setText(
      "Division not performed. Both values are required in inputs. Try again"
    );
    return;
  }
  if (!checkValidDivision(dividend, divider)) {
    setText("Division not performed. Invalid number provided. Try again");
    return;
  }
  if (checkIfNumber(dividend, divider)) {
    setText(Math.floor(dividend / divider));
  }
});
