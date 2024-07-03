import {
  LOGNAME,
  MATCHNAMES,
  COUNTCHARACTERS,
  SORTALPHABETICALLY,
  REMOVECAPE,
  CONTAINSS,
  CREATEOBJECT,
  TOUPPERCASE,
} from "./actions.js";

// Initial state of app
const initialState = {
  provinces: [
    "Western Cape",
    "Gauteng",
    "Northern Cape",
    "Eastern Cape",
    "KwaZulu-Natal",
    "Free State",
  ],
  names: ["Ashwin", "Sibongile", "Jan-Hendrik", "Sifso", "Shailen", "Frikkie"],
  toDisplay: [],
};

/**
 * The reducer function manages the state based on the actions
 *
 * @param {object} state - The current state
 * @param {object} action - The action being dispatched
 * @returns {object} - The new state
 */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MATCHNAMES:
      const arrayOfMatchedNames = [];
      state.names.forEach((element, index) => {
        if (index < state.provinces.length) {
          const matchedName = `${element} (${state.provinces[index]})`;
          arrayOfMatchedNames.push(matchedName);
        }
      });
      console.log(arrayOfMatchedNames);
      return {
        ...state,
        toDisplay: arrayOfMatchedNames,
      };

    case LOGNAME:
      const arrayOfNames = [];
      state.names.forEach((element) => {
        arrayOfNames.push(element);
      });

      console.log(arrayOfNames);
      return { ...state, toDisplay: arrayOfNames };

    case TOUPPERCASE:
      const arrayOfUpppercaseCharacters = state.provinces.map((element) =>
        String(element).toUpperCase()
      );
      console.log(arrayOfUpppercaseCharacters);
      return { ...state, toDisplay: arrayOfUpppercaseCharacters };

    case COUNTCHARACTERS:
      const arrayOfCountedCharacters = state.names.map(
        (element) => element.trim().length
      );
      console.log(arrayOfCountedCharacters);

      return { ...state, toDisplay: arrayOfCountedCharacters };

    case SORTALPHABETICALLY:
      const arrayOfAlphabeticallySortedProvinces = state.provinces.toSorted();
      console.log(arrayOfAlphabeticallySortedProvinces);

      return { ...state, toDisplay: arrayOfAlphabeticallySortedProvinces };
    
      case REMOVECAPE:
       const arrayWithoutCape = state.provinces.filter((province)=> !province.toLowerCase().includes('cape'));
       console.log(arrayWithoutCape.length);
  
      return { ...state, toDisplay: arrayWithoutCape.length };

      case CONTAINSS:
      const arrayOfIfNamesContainS = state.names.map((name)=> name.toLowerCase().includes('s'))
    
       return { ...state, toDisplay: arrayOfIfNamesContainS };

       case CREATEOBJECT:

        const objectCreated = state.names.reduce((accumulator, name, index) => {
          accumulator[name] = state.provinces[index];
          return accumulator;
        }, {});
        console.log(objectCreated);
        return {
          ...state,
          toDisplay: objectCreated // Update the state with the mapping object
        };

    default:
      return state;
  }
};
