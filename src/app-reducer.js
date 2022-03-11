export const initialState = {
  answers: [],
};

export const appReducer = (state, action) => {
  return {
    ...state,
    [action.type]: action.payload,
  };
};
