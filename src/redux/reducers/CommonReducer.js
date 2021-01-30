const initialState = {
  isLoading: false,
  count: 0,
};
const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_LOADING": {
      state.count++;
      if (state.count === 1) {
        state.isLoading = true;
      }
      return { ...state };
    }
    case "STOP_LOADING": {
      return { ...state, isLoading: false };
    }
    case "RESET_COUNT": {
      return { ...state, count: action.payload };
    }
    default:
      return state;
  }
};

export default CommonReducer;
