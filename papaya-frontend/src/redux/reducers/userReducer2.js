import { 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    LOADING,
    ERROR,
    REFRESH_TOKEN, 
    UPDATE_USER,
  } from '../actions/types.js';
  import initialState from '../initialState';
  
  const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
      case UPDATE_USER:
        return {
          ...state,
          ...action.payload.user,
            isLoggedIn: true,
            userFound: true,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  