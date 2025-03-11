// reducer.js
import { ADD_CERTIFICATION } from "./actions";

const initialState = {
  certifications: [],
};

const certificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CERTIFICATION:
      if (state.certifications.length >= 5) {
        alert("You can only save up to 5 certifications.");
        return state; // Do nothing if there are already 5 certifications
      }
      return {
        ...state,
        certifications: [...state.certifications, action.payload],
      };
    default:
      return state;
  }
};

export default certificationReducer;
