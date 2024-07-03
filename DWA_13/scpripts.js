import { createStore } from "./model/store.js";
import { reducer } from "./model/reducer.js";
import { CONTAINSS, COUNTCHARACTERS, CREATEOBJECT, LOGNAME, MATCHNAMES, REMOVECAPE, SORTALPHABETICALLY, TOUPPERCASE } from "./model/actions.js";

const SELECTORS = {
  buttonLogName: document.querySelector("[data-button-logName]"),
  buttonMatchNames: document.querySelector("[data-button-matchNames]"),
  buttonToUppercase: document.querySelector("[data-button-toUppercase]"),
  buttonCountCharacters: document.querySelector("[data-button-countCharacters]"),
  buttonSortAlphabetically: document.querySelector("[data-button-sortAlphabetically]"),
  buttonRemoveCape: document.querySelector("[data-button-removeCape]"),
  buttonCotainsS:document.querySelector("[data-button-containsS]"),
  buttonCreateObject :document.querySelector("[data-button-createObject]"),
  dialog: document.querySelector("[data-dialog]"),
};

// Create the store using the reducer
const store = createStore(reducer);

/**
 * Listener function to update the dialog content whenever the state changes.
 */
const updateDialogContent = () => {
  const state = store.getState();
  const { toDisplay } = state;

  if (Array.isArray(toDisplay)) {
    SELECTORS.dialog.textContent = toDisplay.join(", ");
  } else {
    console.log('apple');
    SELECTORS.dialog.textContent = toDisplay;
  }
  

  SELECTORS.dialog.show();
};

// Subscribe the listener to state changes.
const unsubscribeUpdateDialog = store.subscribe(updateDialogContent);

// Attach event listeners to buttons
SELECTORS.buttonLogName.addEventListener("click", () => {
  store.dispatch({ type: LOGNAME });
  updateDialogContent();

  
  
});

SELECTORS.buttonMatchNames.addEventListener("click", () => {
  store.dispatch({ type: MATCHNAMES });
  updateDialogContent();
  
});
SELECTORS.buttonToUppercase.addEventListener("click", () => {
  store.dispatch({ type: TOUPPERCASE });
  updateDialogContent();
  
});

SELECTORS.buttonCountCharacters.addEventListener("click", () => {
  store.dispatch({ type: COUNTCHARACTERS });
  updateDialogContent();
  
});

SELECTORS.buttonSortAlphabetically.addEventListener("click", () => {
  store.dispatch({ type: SORTALPHABETICALLY });
  updateDialogContent();
});
SELECTORS.buttonRemoveCape.addEventListener("click", () => {
  store.dispatch({ type: REMOVECAPE });
  updateDialogContent();
});

SELECTORS.buttonCotainsS.addEventListener("click", () => {
  store.dispatch({ type: CONTAINSS });
  updateDialogContent();
});

SELECTORS.buttonCreateObject.addEventListener("click", () => {
  store.dispatch({ type: CREATEOBJECT });
  updateDialogContent();
});


unsubscribeUpdateDialog();




const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

products.forEach((item) => {
  console.log(item.product);
});

const filteredProducts = products.filter(item => item.product.length <= 5);
console.log(filteredProducts);

const namesOfProducts = products.reduce((accumulator, item, index) => {
  if (index === 0) {
    return item.product;
  } else if (index === products.length - 1) {
    return `${accumulator} and ${item.product}`;
  } else {
    return `${accumulator}, ${item.product}`;
  }
}, '');
console.log(namesOfProducts);




const highestPrice = products.reduce((highest, product) => {
  if (product.price > highest.price || Number(product.price)>0) {
    return { product: product.product, price: product.price };
  } else {
    return highest;
  }
}, {});


const lowestPrice = products.reduce((lowest, product) => {
  if (product.price < lowest.price || Number(product.price)>0 ) {
    return { product: product.product, price: product.price };
  } else {
    return lowest;
  }
}, {});

const highestString = `Highest: ${highestPrice.product}. Lowest: ${lowestPrice.product}.`;

console.log(highestString)



const recreatedProducts = products.reduce((accumulator, current) => {
  const transformedEntries = Object.entries(current).map(([key, value]) => {
    switch (key) {
      case 'product':
        return ['name', value];
      case 'price':
        return ['cost', value];
      default:
        return [key, value];
    }
  });

  const transformedObject = Object.fromEntries(transformedEntries);
  accumulator.push(transformedObject);
  return accumulator;
}, []);

console.log(recreatedProducts);