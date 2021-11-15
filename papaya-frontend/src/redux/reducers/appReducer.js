import { 
    OPEN_NAV,
    ERROR,
    LOADING,

  } from '../actions/types.js';
  import initialState from '../initialState';
  
  const appReducer = (state = initialState.appState, action) => {
    switch (action.type) {
      case OPEN_NAV : 
      return {
        ...state,
        sideMenu: !state.sideMenu
      }
      case LOADING:
      return {
        ...state,
        loading: action.payload
        };
      case ERROR:
        return {
          ...state,
          error: action.payload
          };
      default:
        return state;
    };
    
  };
  
  export default appReducer;
  