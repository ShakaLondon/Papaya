import initialState from "../initialState";

const searchReducer = (state = initialState.searchRes, action) => {
  switch (action.type) {
    // case FILL_CHILLOUT:
    //   return {
    //     ...state,
    //     chillOut: action.payload,
    //   };
    // case FILL_CLASSICAL:
    //   return {
    //     ...state,
    //     classical: action.payload,
    //   };
    // case FILL_ROCK:
    //   return {
    //     ...state,
    //     rockMusic: action.payload,
    //   };
    // case FILL_SEARCH:
    //   return {
    //     ...state,
    //     search: action.payload,
    //   };
    // case SELECT:
    //   return {
    //     ...state,
    //     selected: action.payload,
    //   };
    // case LOADING:
    //   return {
    //     ...state,
    //     loading: action.payload,
    //   };
    // case ERROR:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };

    default:
      return state;
  }
};

export default searchReducer;
