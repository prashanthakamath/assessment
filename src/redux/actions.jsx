// actions.js
export const ADD_CERTIFICATION = "ADD_CERTIFICATION";

// Action creator to add certification
export const addCertification = (certification) => ({
  type: ADD_CERTIFICATION,
  payload: certification,
});
