export const ADD_CERTIFICATION = "ADD_CERTIFICATION";

export const addCertification = (certification) => ({
  type: ADD_CERTIFICATION,
  payload: certification,
});
