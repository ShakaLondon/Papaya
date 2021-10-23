import { OPEN_NAV } from '../actions';
import initialState from '../initialState';

const appReducer = (state = initialState.appState, action) => {
  switch (action.type) {
    case OPEN_NAV : 
    return {
      sideMenu: !state.sideMenu
    }
    default:
      return state;
  }
};

export default appReducer;
