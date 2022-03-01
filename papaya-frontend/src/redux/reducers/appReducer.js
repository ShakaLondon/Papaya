import { OPEN_NAV, ERROR, LOADING, COLOR_CHANGE } from "../actions/types.js";
import initialState from "../initialState";

const appReducer = (state = initialState.appState, action) => {
  switch (action.type) {
    case OPEN_NAV:
      return {
        ...state,
        sideMenu: action.payload,
      };
    case COLOR_CHANGE:
      return {
        ...state,
        colorChange: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
