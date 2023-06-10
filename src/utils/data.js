export const SET_DATA = "SET_DATA";

export function setSimpsonsData(data) {
  return {
    type: SET_DATA,
    payload: data,
  };
}
