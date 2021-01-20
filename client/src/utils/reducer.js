export const initialState = {
  user: null,
  notes: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        Cart: [...state.Cart, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
